const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    // We want to export to root to be github pages compatible
    path: path.resolve(__dirname, '')
  },
  watch: true,
  mode: 'development',
};
