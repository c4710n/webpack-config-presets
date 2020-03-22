/* eslint-env node */

const path = require('path')
const { setupIO, merge, cleanupBuild } = require('../../src')

function resolve(p) {
  const ROOT = path.resolve(__dirname)
  return path.resolve(ROOT, p)
}

const PATH_SRC_INDEX = resolve('src/index.js')
const PATH_DIST = resolve('dist/')

module.exports = merge([setupIO(PATH_SRC_INDEX, PATH_DIST), cleanupBuild()])
