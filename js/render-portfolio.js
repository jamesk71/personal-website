/* =========================================================
   James Kane — Electrical Engineer Portfolio
   Renders the portfolio tile grid from window.PROJECTS
   (see js/projects-data.js) so the project list only has
   to be maintained in one place.

   Usage: <section class="project-grid" data-component="project-grid" data-base="./"></section>
   ========================================================= */

(function () {
  function init() {
    var grid = document.querySelector('[data-component="project-grid"]');
    if (!grid || !window.PROJECTS) return;

    var base = grid.getAttribute('data-base') || './';

    grid.innerHTML = window.PROJECTS.map(function (p) {
      return (
        '<a class="project-tile" href="' + base + p.url + '">' +
        '<div class="tile-title">' + p.title + '</div>' +
        '<div class="tile-image-wrap">' +
        '<img src="' + base + p.thumb + '" alt="' + p.title + ' project">' +
        '</div>' +
        '</a>'
      );
    }).join('');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
