// Sign-in and persona gate: every app screen belongs to one lens (Owner, Core Group, Entity).
// login.html checks the credentials (DCT_USERS in its script) and stores "dct-auth"; personas.html stores the persona ("dct-persona").
// Not signed in → login. No persona → persona screen. A screen from another lens → that screen's closest equivalent in the persona's own lens.
(function () {
  var HOME = {"Owner": "P2-O01-EnterpriseHealth.html", "Core Group": "P2-G01-Portfolio.html", "Entity": "P2-E01-EntityHome.html"};
  var persona = null;
  try { persona = localStorage.getItem("dct-persona"); } catch (e) {}
  var file = location.pathname.split("/").pop() || "";
  var auth = null;
  try { auth = localStorage.getItem("dct-auth") || sessionStorage.getItem("dct-auth"); } catch (e) {}
  var back = "?next=" + encodeURIComponent(file + location.search + location.hash);
  if (!auth) { location.replace("login.html" + back); return; }
  if (!HOME[persona]) { location.replace("personas.html" + back); return; }
  // Removed for the Owner: Actions & Escalations (O-06, O-08; MANIFEST02) and Data Assurance (G-08o; MANIFEST03 S2)
  if (persona === "Owner" && /^P2-(O0[68]|G08o)-/.test(file)) { location.replace(HOME.Owner); return; }
  var html = document.documentElement;
  html.classList.add("dct-gate");
  var st = document.createElement("style");
  st.textContent = "html.dct-gate #dc-root{visibility:hidden}";
  document.head.appendChild(st);
  document.addEventListener("DOMContentLoaded", function () {
    var m = document.querySelector("[data-dct-lens]");
    var lens = m && m.getAttribute("data-dct-lens");
    if (lens && lens !== persona) {
      var a = m.querySelector('a[data-lens="' + persona + '"]');
      location.replace(a ? a.getAttribute("href") : HOME[persona]);
      return;
    }
    html.classList.remove("dct-gate");
  });
})();
