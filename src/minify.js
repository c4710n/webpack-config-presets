/* eslint-env node */

const TerserPlugin = require('terser-webpack-plugin')

module.exports = () => {
  return {
    optimization: {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
          extractComments: false,
          terserOptions: {
            comments: false,
            ecma: 5, // transpile all codes to ECMAScript 5
          },
        }),
      ],
    },
  }
}
