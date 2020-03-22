/* eslint-env node */

const path = require('path')
const {
  merge,
  setupIO,
  setupDevServer,
  loadHTML,
  loadCSS,
  loadSASS,
  loadMacro,
  loadMedia,
  loadEnvs,
  minify,
  forceCaseSensitivePath,
  generateSourcemap,
  cleanupBuild,
} = require('../src')

function resolve(p) {
  const ROOT = path.resolve(__dirname)
  return path.resolve(ROOT, p)
}

const PATH_RES = resolve('res/')
const PATH_ENTRY = resolve('src/index.html')
const PATH_SRC_INDEX = resolve('src/index.js')
const PATH_DIST = resolve('dist/')

const commonConfig = [
  { resolve: { alias: { res: PATH_RES } } },
  setupIO(PATH_SRC_INDEX, PATH_DIST),
  loadHTML(PATH_ENTRY),
  loadCSS(),
  loadSASS(),
  loadMacro(),
  loadMedia(),
  loadEnvs(['APP_ENV']),
  forceCaseSensitivePath(),
  generateSourcemap(),
]

const developmentConfig = [...commonConfig, setupDevServer()]
const productionConfig = [...commonConfig, minify(), cleanupBuild()]

module.exports = function (_, { mode } = { mode: 'NO_MODE' }) {
  const config = mode === 'production' ? productionConfig : developmentConfig
  return merge(config)
}
