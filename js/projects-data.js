/* =========================================================
   James Kane — Electrical Engineer Portfolio
   Shared project data

   Single source of truth for every project's title, thumbnail,
   and URL. Used to render the portfolio grid and the "explore
   another project" widget on each project detail page.

   `key` must match the `data-current` attribute set on that
   project's page (see project-detail.js).

   All paths are root-relative; render-portfolio.js and
   project-detail.js prefix them with each page's data-base.
   ========================================================= */

window.PROJECTS = [
  {
    key: "autonomous-car",
    title: "Autonomous Car",
    thumb: "images/Autonomous_Car_Thumbnail.jpeg",
    url: "projects/autonomous-car.html"
  },
  {
    key: "ammonia-sensor",
    title: "Ammonia Level Sensor",
    thumb: "images/Ammonia_Sensor_Thumbnail.jpg",
    url: "projects/ammonia-sensor.html"
  },
  {
    key: "fpga-emulation",
    title: "FPGA Hardware Emulation",
    thumb: "images/FPGA_Hardware_Emulation_Thumbnail.jpg",
    url: "projects/fpga-emulation.html"
  },
  {
    key: "submersible",
    title: "Controllable Underwater Submersible",
    thumb: "images/submersible_thumbnail.png",
    url: "projects/submersible.html"
  }
];
