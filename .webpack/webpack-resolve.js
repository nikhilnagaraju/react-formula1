const path = require('path');

module.exports = {
  resolve: {
    alias: {
      actions: path.resolve(__dirname, '../src/actions'),
      components: path.resolve(__dirname, '../src/components'),
      reducers: path.resolve(__dirname, '../src/reducers'),
      store: path.resolve(__dirname, '../src'),
      views: path.resolve(__dirname, '../src/views'),
    },
    extensions: ['.js', '.jsx'],
  },
};
