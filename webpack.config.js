const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bpmntaskresize.js',
    path: path.resolve(__dirname, 'dist')
  }
};
