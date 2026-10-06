"""Tiny Excel formula evaluator for the KPI model workbook.

Supports what the model uses: numbers, strings, cell refs and ranges (with or without
sheet, $ anchors), + - * / ^ & and comparisons, and the functions SUM, MIN, MAX, ROUND,
IF, IFERROR, ABS, SQRT, OR, AND, NORM.DIST, AVERAGE. IF/IFERROR are lazy, so guarded
divisions like IF(X=0,0,Y/X) never raise.
"""
import math, re

TOK = re.compile(r"""\s*(?:
  (?P<str>"(?:[^"]|"")*")|
  (?P<ref>(?:'[^']+'|[A-Za-z_][\w\.]*)?!?\$?[A-Z]{1,3}\$?\d+(?::\$?[A-Z]{1,3}\$?\d+)?)|
  (?P<num>\d+(?:\.\d+)?(?:[eE][-+]?\d+)?)|
  (?P<func>[A-Z][A-Z0-9\.]*)\(|
  (?P<name>[A-Za-z_][\w\.]*)|
  (?P<op><>|<=|>=|[-+*/^&=<>(),%])
)""", re.X)


def col2n(c):
    n = 0
    for ch in c: n = n * 26 + ord(ch) - 64
    return n


class XLError(Exception): pass


def tokenize(s):
    s = s.lstrip("=")
    out, i = [], 0
    while i < len(s):
        if s[i].isspace(): i += 1; continue
        m = TOK.match(s, i)
        if not m or m.end() == i: raise XLError("cannot parse at %r" % s[i:i + 20])
        kind = m.lastgroup; val = m.group(kind)
        # a bare word like "A1" without sheet is a ref; names like TaxRate are names
        out.append((kind, val)); i = m.end()
    return out


class Parser:
    def __init__(self, toks): self.t, self.i = toks, 0
    def peek(self): return self.t[self.i] if self.i < len(self.t) else (None, None)
    def take(self, v=None):
        k, x = self.peek()
        if v is not None and x != v: raise XLError("expected %s got %s" % (v, x))
        self.i += 1; return k, x
    def parse(self):
        e = self.cmp()
        if self.i != len(self.t): raise XLError("trailing tokens %r" % (self.t[self.i:],))
        return e
    def cmp(self):
        e = self.concat()
        while self.peek()[1] in ("=", "<>", "<", ">", "<=", ">="):
            op = self.take()[1]; e = ("bin", op, e, self.concat())
        return e
    def concat(self):
        e = self.add()
        while self.peek()[1] == "&":
            self.take(); e = ("bin", "&", e, self.add())
        return e
    def add(self):
        e = self.mul()
        while self.peek()[1] in ("+", "-"):
            op = self.take()[1]; e = ("bin", op, e, self.mul())
        return e
    def mul(self):
        e = self.pow()
        while self.peek()[1] in ("*", "/"):
            op = self.take()[1]; e = ("bin", op, e, self.pow())
        return e
    def pow(self):
        e = self.unary()
        while self.peek()[1] == "^":
            self.take(); e = ("bin", "^", e, self.unary())
        return e
    def unary(self):
        if self.peek()[1] == "-": self.take(); return ("neg", self.unary())
        if self.peek()[1] == "+": self.take(); return self.unary()
        e = self.atom()
        if self.peek()[1] == "%": self.take(); e = ("bin", "/", e, ("num", 100.0))
        return e
    def atom(self):
        k, v = self.take()
        if k == "num": return ("num", float(v))
        if k == "str": return ("str", v[1:-1].replace('""', '"'))
        if k == "ref": return ("ref", v)
        if k == "name": return ("name", v)
        if k == "func":
            args = []
            if self.peek()[1] != ")":
                while True:
                    args.append(self.cmp())
                    if self.peek()[1] == ",": self.take(); continue
                    break
            self.take(")"); return ("func", v, args)
        if v == "(":
            e = self.cmp(); self.take(")"); return e
        raise XLError("unexpected %r" % (v,))


REF = re.compile(r"^(?:'?([^'!]+)'?!)?\$?([A-Z]{1,3})\$?(\d+)(?::\$?([A-Z]{1,3})\$?(\d+))?$")


class Book:
    """cells: {(sheet, col, row): value-or-formula}; names: {name: (sheet, col, row)}"""
    def __init__(self, cells, names=None):
        self.cells, self.names, self.cache = cells, names or {}, {}
        self.ast = {}

    def value(self, sheet, col, row):
        key = (sheet, col, row)
        if key in self.cache: return self.cache[key]
        v = self.cells.get(key)
        if isinstance(v, str) and v.startswith("="):
            self.cache[key] = 0.0  # cycle guard
            ast = self.ast.get(v)
            if ast is None: ast = self.ast[v] = Parser(tokenize(v)).parse()
            v = self.ev(ast, sheet)
        elif v is None: v = 0.0
        self.cache[key] = v
        return v

    def rng(self, ref, sheet):
        m = REF.match(ref)
        if not m: raise XLError("bad ref " + ref)
        sh = m.group(1) or sheet
        c1, r1 = col2n(m.group(2)), int(m.group(3))
        if m.group(4):
            c2, r2 = col2n(m.group(4)), int(m.group(5))
            return [self.value(sh, c, r) for r in range(r1, r2 + 1) for c in range(c1, c2 + 1)], True
        return self.value(sh, c1, r1), False

    def ev(self, n, sheet):
        t = n[0]
        if t == "num" or t == "str": return n[1]
        if t == "ref": return self.rng(n[1], sheet)[0]
        if t == "name":
            if n[1] in ("TRUE", "FALSE"): return n[1] == "TRUE"
            return self.value(*self.names[n[1]])
        if t == "neg": return -num(self.ev(n[1], sheet))
        if t == "bin":
            op = n[1]; a = self.ev(n[2], sheet); b = self.ev(n[3], sheet)
            if op == "&": return xtext(a) + xtext(b)
            if op in ("=", "<>", "<", ">", "<=", ">="):
                if isinstance(a, str) or isinstance(b, str): a, b = str(a), str(b)
                return {"=": a == b, "<>": a != b, "<": a < b, ">": a > b, "<=": a <= b, ">=": a >= b}[op]
            a, b = num(a), num(b)
            if op == "+": return a + b
            if op == "-": return a - b
            if op == "*": return a * b
            if op == "/":
                if b == 0: raise ZeroDivisionError
                return a / b
            if op == "^": return a ** b
        if t == "func": return self.fn(n[1], n[2], sheet)
        raise XLError("bad node %r" % (n,))

    def flat(self, args, sheet):
        out = []
        for a in args:
            if a[0] == "ref":
                v, is_rng = self.rng(a[1], sheet)
                out.extend(v if is_rng else [v])
            else: out.append(self.ev(a, sheet))
        return [num(x) for x in out if not isinstance(x, str)]

    def fn(self, f, args, sheet):
        if f == "IF":
            c = self.ev(args[0], sheet)
            if c: return self.ev(args[1], sheet)
            return self.ev(args[2], sheet) if len(args) > 2 else False
        if f == "IFERROR":
            try: return self.ev(args[0], sheet)
            except (ZeroDivisionError, ValueError, XLError, OverflowError): return self.ev(args[1], sheet)
        if f == "SUM": return sum(self.flat(args, sheet))
        if f == "MIN": v = self.flat(args, sheet); return min(v) if v else 0.0
        if f == "MAX": v = self.flat(args, sheet); return max(v) if v else 0.0
        if f == "AVERAGE": v = self.flat(args, sheet); return sum(v) / len(v) if v else 0.0
        if f == "ROUND":
            x = num(self.ev(args[0], sheet)); d = int(num(self.ev(args[1], sheet)))
            q = 10 ** d; return math.floor(abs(x) * q + 0.5) / q * (1 if x >= 0 else -1)
        if f == "ABS": return abs(num(self.ev(args[0], sheet)))
        if f == "SQRT": return math.sqrt(num(self.ev(args[0], sheet)))
        if f == "OR": return any(self.ev(a, sheet) for a in args)
        if f == "AND": return all(self.ev(a, sheet) for a in args)
        if f == "NORM.DIST":
            x, mu, sd = (num(self.ev(a, sheet)) for a in args[:3])
            cum = self.ev(args[3], sheet) if len(args) > 3 else True
            if sd <= 0: raise ValueError
            z = (x - mu) / sd
            return 0.5 * (1 + math.erf(z / math.sqrt(2))) if cum else math.exp(-z * z / 2) / (sd * math.sqrt(2 * math.pi))
        raise XLError("unsupported function " + f)


def xtext(x):
    """Excel's text form of a value in a & concatenation (15 significant digits, no trailing .0)."""
    if isinstance(x, bool): return "TRUE" if x else "FALSE"
    if isinstance(x, float):
        if x == int(x) and abs(x) < 1e15: return str(int(x))
        return ("%.15g" % x)
    return str(x)


def num(x):
    if isinstance(x, bool): return 1.0 if x else 0.0
    if x is None or x == "": return 0.0
    if isinstance(x, str):
        try: return float(x)
        except ValueError: raise XLError("text in arithmetic: %r" % x)
    return float(x)
