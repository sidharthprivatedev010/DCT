// Persona gate: every app screen belongs to one lens (Owner, Core Group, Entity).
// The persona chosen on login.html is kept in localStorage ("dct-persona").
// No persona → login. A screen from another lens → that screen's closest equivalent in the persona's own lens.
(function () {
  var HOME = {"Owner": "P2-O01-EnterpriseHealth.html", "Core Group": "P2-G01-Portfolio.html", "Entity": "P2-E01-EntityHome.html"};
  var persona = null;
  try { persona = localStorage.getItem("dct-persona"); } catch (e) {}
  var file = location.pathname.split("/").pop() || "";
  if (!HOME[persona]) { location.replace("login.html?next=" + encodeURIComponent(file + location.search + location.hash)); return; }
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
