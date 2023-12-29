const path = require('path');

const rootConfig = {
  mode: 'development',
  optimization: {
    usedExports: true, // tells webpack to tree-shake
  },
  devtool: 'eval-source-map'
};

const appConfig = {
  ...rootConfig,
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/js'),
  },
};


module.exports = [appConfig]; //, serviceWorkerConfig