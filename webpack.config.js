require('dotenv').config()
const path = require('path')
const glob = require('glob-all')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const MiniExtractCssPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:/]+/g) || []
  }
}

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    index: ['webpack-hot-middleware/client?reload=true', './client/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'server/public/'),
    filename: 'app.js',
    publicPath: '/',
    chunkFilename: '[name].app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [MiniExtractCssPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new PurgecssPlugin({
      paths: glob.sync([
        path.join(__dirname, 'client/**/*.js'),
        path.join(__dirname, 'client/**/*.css')
      ]),
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['html', 'js', 'css']
        }
      ]
    }),
    new MiniExtractCssPlugin({
      filename: 'app.css'
    })
  ],
  optimization: {
    minimizer: [
      devMode &&
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        }),
      new OptimizeCSSAssetsPlugin({}),
      new webpack.HotModuleReplacementPlugin()
    ]
  }
}
