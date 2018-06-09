const path = require('path');

module.exports = {
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  rootDir: path.resolve(__dirname, '../'),
  setupFiles: [path.resolve(__dirname, './jest-setup.js')],
};
