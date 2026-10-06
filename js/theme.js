// Light/dark theme: applies the saved choice before first paint and wires every [data-theme-toggle].
(function () {
  var K = "dct-theme", d = document.documentElement;
  try { var t = localStorage.getItem(K); if (t === "light" || t === "dark") d.setAttribute("data-theme", t); } catch (e) {}
  function cur() {
    var t = d.getAttribute("data-theme");
    return t || (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-theme-toggle]");
    if (!b) return;
    var n = cur() === "dark" ? "light" : "dark";
    d.setAttribute("data-theme", n);
    try { localStorage.setItem(K, n); } catch (x) {}
  });
})();
