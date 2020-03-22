const merge = require('webpack-merge')
const setupIO = require('./setup-io')
const setupDevServer = require('./setup-dev-server')
const loadHTML = require('./load-html')
const loadCSS = require('./load-css')
const loadSASS = require('./load-sass')
const loadJS = require('./load-js')
const loadJSX = require('./load-jsx')
const loadReactCSSModule = require('./load-react-css-module')
const loadMacro = require('./load-macro')
const loadMedia = require('./load-media')
const loadEnvs = require('./load-envs')
const minify = require('./minify')
const forceCaseSensitivePath = require('./force-case-sensitive-path')
const generateSourcemap = require('./generate-sourcemap')
const cleanupBuild = require('./cleanup-build')
const encodeBundle = require('./encode-bundle')

module.exports = {
  merge,
  setupIO,
  setupDevServer,
  loadHTML,
  loadCSS,
  loadSASS,
  loadJS,
  loadJSX,
  loadReactCSSModule,
  loadMacro,
  loadMedia,
  loadEnvs,
  minify,
  forceCaseSensitivePath,
  generateSourcemap,
  cleanupBuild,
  encodeBundle,
}
