const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  plugins: [
    // Copy assets to build folder
    new CopyWebpackPlugin([
      'assets/images/**',
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
