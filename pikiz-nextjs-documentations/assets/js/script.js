(function () {
  "use strict";

  var root = document.documentElement;
  var THEME_KEY = "pikiz-docs-theme";

  /* ---------- Theme toggle ---------- */
  function applyTheme(theme) {
    if (theme === "light" || theme === "dark") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme");
    }
  }

  function currentResolvedTheme() {
    var explicit = root.getAttribute("data-theme");
    if (explicit) return explicit;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  var storedTheme = null;
  try { storedTheme = localStorage.getItem(THEME_KEY); } catch (e) { /* storage unavailable */ }
  if (storedTheme) applyTheme(storedTheme);

  var themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var next = currentResolvedTheme() === "light" ? "dark" : "light";
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* ignore */ }
    });
  }

  /* ---------- Mobile sidebar toggle ---------- */
  var shell = document.querySelector(".shell");
  var menuBtn = document.querySelector(".topbar__menu-btn");
  var overlay = document.querySelector(".sidebar-overlay");

  function closeSidebar() { if (shell) shell.classList.remove("sidebar-open"); }
  function toggleSidebar() { if (shell) shell.classList.toggle("sidebar-open"); }

  if (menuBtn) menuBtn.addEventListener("click", toggleSidebar);
  if (overlay) overlay.addEventListener("click", closeSidebar);

  document.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", closeSidebar);
  });

  /* ---------- Scroll progress bar ---------- */
  var progressBar = document.querySelector(".progress-bar");
  function updateProgress() {
    if (!progressBar) return;
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + "%";
  }

  /* ---------- Back-to-top button ---------- */
  var toTop = document.querySelector(".to-top");
  function updateToTop() {
    if (!toTop) return;
    toTop.classList.toggle("is-visible", window.scrollY > 480);
  }
  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  window.addEventListener("scroll", function () {
    updateProgress();
    updateToTop();
  }, { passive: true });
  updateProgress();
  updateToTop();

  /* ---------- Active nav-link highlighting via IntersectionObserver ---------- */
  var sections = Array.prototype.slice.call(document.querySelectorAll(".section[id]"));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-link[href^='#']"));

  function setActiveLink(id) {
    navLinks.forEach(function (link) {
      var isActive = link.getAttribute("href") === "#" + id;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.scrollIntoView({ block: "nearest" });
      }
    });
  }

  if (sections.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      var visible = entries.filter(function (e) { return e.isIntersecting; });
      if (visible.length) {
        visible.sort(function (a, b) {
          return a.boundingClientRect.top - b.boundingClientRect.top;
        });
        setActiveLink(visible[0].target.id);
      }
    }, { rootMargin: "-80px 0px -70% 0px", threshold: [0, 1] });

    sections.forEach(function (section) { observer.observe(section); });
  }

  /* ---------- Sidebar search filter ---------- */
  var searchInput = document.querySelector(".topbar__search input");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      var q = searchInput.value.trim().toLowerCase();
      navLinks.forEach(function (link) {
        var text = link.textContent.toLowerCase();
        link.classList.toggle("hidden-by-search", q.length > 0 && text.indexOf(q) === -1);
      });

      document.querySelectorAll(".nav-group").forEach(function (group) {
        var visibleLinks = group.querySelectorAll(".nav-link:not(.hidden-by-search)");
        group.style.display = (q.length > 0 && visibleLinks.length === 0) ? "none" : "";
      });
    });

    searchInput.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        searchInput.value = "";
        searchInput.dispatchEvent(new Event("input"));
        searchInput.blur();
      }
    });
  }

  /* ---------- "/" focuses search ---------- */
  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement !== searchInput) {
      var tag = (document.activeElement && document.activeElement.tagName) || "";
      if (tag !== "INPUT" && tag !== "TEXTAREA") {
        e.preventDefault();
        if (searchInput) searchInput.focus();
      }
    }
  });

  /* ---------- Copy permalink on heading-anchor click ---------- */
  document.querySelectorAll("a.hash").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var hash = a.getAttribute("href");
      history.pushState(null, "", hash);
      document.querySelector(hash).scrollIntoView({ behavior: "smooth", block: "start" });
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href).catch(function () {});
      }
    });
  });
})();
