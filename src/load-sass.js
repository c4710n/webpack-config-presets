/* eslint-env node */

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const autoprefixer = require('autoprefixer')()
const sass = require('sass') // dart-sass
const { isSASS, getContenthash, isProductionMode } = require('./helper')

const loadSASS = ({ include, exclude } = {}) => {
  const developmentConfig = {
    module: {
      rules: [
        {
          test: isSASS,
          include,
          exclude,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [autoprefixer],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                implementation: sass,
              },
            },
          ],
        },
      ],
    },
  }

  const productionConfig = {
    optimization: {
      minimizer: [
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            // https://github.com/NMFR/optimize-css-assets-webpack-plugin/issues/53#issuecomment-400294569
            map: { inline: false, annotation: true },
          },
        }),
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: `[name]${getContenthash()}.css`,
        chunkFileName: `[id]${getContenthash()}.css`,
      }),
    ],
    module: {
      rules: [
        {
          test: isSASS,
          include,
          exclude,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 1,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: [autoprefixer],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                implementation: sass,
              },
            },
          ],
        },
      ],
    },
  }

  return isProductionMode() ? productionConfig : developmentConfig
}

module.exports = loadSASS
