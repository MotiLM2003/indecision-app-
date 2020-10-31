const path = require('path');
let absolutePath = path.join(__dirname, 'public');

module.exports = {
  entry: './src/app.js',
  output: {
    path: absolutePath,
    filename: 'bundle.js',
  },
};
