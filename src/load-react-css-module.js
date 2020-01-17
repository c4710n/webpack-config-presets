/* eslint-env node */

// This module is created for gajus/babel-plugin-react-css-modules.

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { isCSS, getContenthash, isProductionMode } = require('./helper')

const loadReactCSSModule = (
  context,
  localIdentName,
  { include, exclude } = {}
) => {
  const developmentConfig = {
    module: {
      rules: [
        {
          test: isCSS,
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
                modules: {
                  context,
                  localIdentName,
                },
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
          test: isCSS,
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
                modules: {
                  context,
                  localIdentName,
                },
              },
            },
          ],
        },
      ],
    },
  }

  return isProductionMode() ? productionConfig : developmentConfig
}

module.exports = loadReactCSSModule
