# James Kane — Electrical Engineer Portfolio

A static, framework-free portfolio site. Built to be dropped straight into a GitHub repo and served with GitHub Pages — no build step required.

## Structure

```
├── index.html                     Home / landing page
├── portfolio.html                 Portfolio page (project grid)
├── projects/
│   ├── autonomous-car.html        Dummy detail page
│   ├── ammonia-sensor.html        Dummy detail page
│   ├── fpga-emulation.html        Dummy detail page
│   └── submersible.html           Dummy detail page
├── css/
│   └── style.css                  Global stylesheet (colors, type, layout)
├── js/
│   └── components.js              Injects the shared header & footer
├── images/                        Project thumbnails + home page photo
└── README.md
```

## How the shared header/footer works

Every page includes an empty placeholder plus the shared script:

```html
<div data-component="header" data-base="./" data-active="home"></div>
...
<div data-component="footer" data-base="./"></div>
<script src="js/components.js"></script>
```

`components.js` fills those placeholders in on page load. To edit the header or footer sitewide (nav links, email, social URLs), edit `js/components.js` once — every page picks it up automatically.

- `data-base` — relative path back to the site root (`"./"` for root pages, `"../"` for pages inside `/projects/`)
- `data-active` — highlights the matching nav link (`"home"` or `"portfolio"`)

## Publishing on GitHub Pages

1. Push this folder's contents to the root of a repo (e.g. `jamesk71/jamesk71.github.io`, or any repo with Pages enabled).
2. In the repo's **Settings → Pages**, set the source to the branch/folder you pushed to.
3. The site will be live at your GitHub Pages URL — no build tools, bundlers, or dependencies needed.

## Adding a new project

1. Add the thumbnail to `images/`.
2. Copy one of the files in `projects/` as a template for the new detail page.
3. Add a new tile to the `.project-grid` section in `portfolio.html` pointing at it.

## Customizing colors

All design tokens (colors, fonts, spacing, image corner radius) live at the top of `css/style.css` under `:root`.
