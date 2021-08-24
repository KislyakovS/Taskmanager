const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, './public'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  }
}