const resolve = require('./webpack-resolve');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

const webpackConfig = {
  devServer: {
    compress: true,
    hot: true,
    hotOnly: true,
    historyApiFallback: true,
    https: true,
    overlay: true,
    port: 9000,
  },
  devtool: 'eval-source-map',
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      // JSX and JavaScript loader
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // Font loader, force < 51200 inline, to reduce flash of unstyled content
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 51200,
          },
        },
      },
      // TTF loader for older browsers, no inlining
      {
        test: /\.ttf$/,
        use: ['file-loader'],
      },
      // CSS loader, with scoping enabled
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true,
              minimize: true,
            },
          },
        ],
      },
      // SCSS loader, with scoping enabled
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true,
              minimize: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    // Copy assets to build folder
    new CopyWebpackPlugin([
      'assets/images/*',
    ]),
    // Configure HTML template
    new HtmlWebpackPlugin({
      title: 'F1 Stats',
      favicon: 'assets/favicon.ico',
      meta: {
        charset: {
          name: 'charset',
          content: 'text/html; charset=utf-8',
        },
        viewport: {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
        },
      },
    }),
    new HotModuleReplacementPlugin(),
  ],
};

module.exports = { ...webpackConfig, ...resolve };
