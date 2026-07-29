/* =========================================================
   James Kane — Electrical Engineer Portfolio
   Renders the bottom nav on each project detail page:
   a link back to the portfolio, and a preview card linking
   to a randomly chosen *other* project.

   Usage:
     <section class="project-nav"
              data-component="project-nav"
              data-base="../"
              data-current="autonomous-car"></section>

   - data-base    : relative path back to the site root
   - data-current : this project's `key` in window.PROJECTS,
                     so it's excluded from the random pick
   ========================================================= */

(function () {
  function init() {
    var nav = document.querySelector('[data-component="project-nav"]');
    if (!nav || !window.PROJECTS) return;

    var base = nav.getAttribute('data-base') || './';
    var current = nav.getAttribute('data-current') || '';

    var others = window.PROJECTS.filter(function (p) {
      return p.key !== current;
    });
    var pick = others[Math.floor(Math.random() * others.length)];

    var html =
      '<a class="btn-secondary" href="' + base + 'portfolio.html">&larr; All Projects</a>';

    if (pick) {
      html +=
        '<a class="random-project-card" href="' + base + pick.url + '">' +
        '<img src="' + base + pick.thumb + '" alt="' + pick.title + '">' +
        '<span class="random-project-copy">' +
        '<span class="random-project-label">Explore Another Project</span>' +
        '<span class="random-project-title">' + pick.title + '</span>' +
        '</span>' +
        '<span class="random-arrow">&rarr;</span>' +
        '</a>';
    }

    nav.innerHTML = html;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
