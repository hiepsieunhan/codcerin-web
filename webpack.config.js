var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/app');
var IMAGE_DIR = path.resolve(__dirname, 'src/assets');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/app/index'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
    /*publicPath: '/'*/
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      include: APP_DIR
    }, {
      test: /\.scss$/,
      loader: "style-loader!css-loader!postcss-loader!sass-loader",
      include: path.join(__dirname, 'src/css')
    }, {
      test: /\.(jpg|png)$/,
      loader: 'file-loader?name=img/img-[hash:6].[ext]',
      include: IMAGE_DIR
    }, {
      test: /\.json$/,
      loader: 'json-loader',
      include: path.join(APP_DIR, 'data')
    }]
  }
};
