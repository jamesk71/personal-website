/* =========================================================
   James Kane — Electrical Engineer Portfolio
   Global Header / Footer Components

   Usage: place an empty element with the right data-attributes
   on any page, then include this script.

     <div data-component="header" data-base="./" data-active="home"></div>
     <div data-component="footer" data-base="./"></div>

   - data-base   : relative path back to the site root
                   ("./" from a root page, "../" from /projects/*.html)
   - data-active : "home" | "portfolio" | "resume" — highlights the matching nav link
   ========================================================= */

(function () {
  var ICONS = {
    linkedin:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>',
    github:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.65.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.11-1.51-1.11-1.51-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.275 2.75 1.05a9.32 9.32 0 0 1 5 0c1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2z"/></svg>'
  };

  function buildHeader(base) {
    return (
      '<div class="header-inner">' +
      '<a class="brand" href="' + base + 'index.html">James Kane <span class="brand-sub">- Electrical Engineer</span></a>' +
      '<nav class="nav">' +
      '<a href="' + base + 'index.html" data-page="home">Home</a>' +
      '<a href="' + base + 'portfolio.html" data-page="portfolio">Portfolio</a>' +
      '<a href="' + base + 'resume.html" data-page="resume">Resume</a>' +
      '</nav>' +
      '</div>'
    );
  }

  function buildFooter(base) {
    return (
      '<div class="footer-inner">' +
      '<div class="footer-left">' +
      '<h2>James Kane - Electrical Engineer</h2>' +
      '<h4>jbkane1010@gmail.com</h4>' +
      '</div>' +
      '<div class="footer-right">' +
      '<a class="social-btn" href="https://www.linkedin.com/in/james-kane-ee/" target="_blank" rel="noopener" aria-label="LinkedIn">' + ICONS.linkedin + '</a>' +
      '<a class="social-btn" href="https://github.com/jamesk71" target="_blank" rel="noopener" aria-label="GitHub">' + ICONS.github + '</a>' +
      '</div>' +
      '</div>'
    );
  }

  function init() {
    document.querySelectorAll('[data-component="header"]').forEach(function (el) {
      var base = el.getAttribute('data-base') || './';
      var active = el.getAttribute('data-active') || '';
      el.classList.add('site-header');
      el.innerHTML = buildHeader(base);
      var link = el.querySelector('[data-page="' + active + '"]');
      if (link) link.classList.add('active');
    });

    document.querySelectorAll('[data-component="footer"]').forEach(function (el) {
      var base = el.getAttribute('data-base') || './';
      el.classList.add('site-footer');
      el.innerHTML = buildFooter(base);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
