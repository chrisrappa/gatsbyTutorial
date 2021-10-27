
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/vrdevchris/gatsbydemo/demo/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/vrdevchris/gatsbydemo/demo/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/home/vrdevchris/gatsbydemo/demo/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/home/vrdevchris/gatsbydemo/demo/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/home/vrdevchris/gatsbydemo/demo/src/pages/index.js")),
  "component---src-pages-products-js": preferDefault(require("/home/vrdevchris/gatsbydemo/demo/src/pages/products.js"))
}

