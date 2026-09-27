/* Athlomed — 法務ページ共通スクリプト */
(function () {
  "use strict";
  var links = Array.prototype.slice.call(document.querySelectorAll('.lg-toc a[href^="#"]'));
  var sections = links.map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); }).filter(Boolean);
  if (sections.length && "IntersectionObserver" in window) {
    var setCurrent = function (id) {
      links.forEach(function (a) {
        var on = a.getAttribute("href") === "#" + id;
        if (on) { a.setAttribute("aria-current", "true"); } else { a.removeAttribute("aria-current"); }
      });
    };
    var visible = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { visible[e.target.id] = e.isIntersecting; });
      for (var i = 0; i < sections.length; i++) {
        if (visible[sections[i].id]) { setCurrent(sections[i].id); return; }
      }
    }, { rootMargin: "-88px 0px -70% 0px", threshold: 0 });
    sections.forEach(function (s) { io.observe(s); });
    setCurrent(sections[0].id);
  }
  var details = document.querySelector(".lg-toc-m");
  if (details) {
    details.addEventListener("click", function (e) {
      if (e.target.tagName === "A") details.removeAttribute("open");
    });
  }
})();
