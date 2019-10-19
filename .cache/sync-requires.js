const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-page-js": hot(preferDefault(require("/Users/Marie/Desktop/elena-website-2/src/templates/page.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/Marie/Desktop/elena-website-2/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/Marie/Desktop/elena-website-2/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/Marie/Desktop/elena-website-2/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/Marie/Desktop/elena-website-2/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Marie/Desktop/elena-website-2/src/pages/index.js"))),
  "component---src-pages-resume-js": hot(preferDefault(require("/Users/Marie/Desktop/elena-website-2/src/pages/resume.js")))
}

