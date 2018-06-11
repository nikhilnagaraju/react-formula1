const path = require('path');
const resolve = require('./.resolve');
const modules = require('./.modules');
const plugins = require('./.plugins');

const isProduction = () => process.env.NODE_ENV === 'production';

const webpackConfig = {
  mode: isProduction() ? 'production' : 'development',
  devServer: {
    compress: true,
    hot: true,
    hotOnly: true,
    historyApiFallback: true,
    https: true,
    overlay: true,
    port: 9000,
  },
  devtool: isProduction() ? 'none' : 'eval-source-map',
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: isProduction() ? '/react-formula1' : '/',
  },
};

module.exports = { ...webpackConfig, ...plugins, ...modules, ...resolve };
