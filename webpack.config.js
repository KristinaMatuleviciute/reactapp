'use strict'
var Path = require('path');

var buildPath = Path.resolve(__dirname, 'dist');
var nodeModulesPath = Path.resolve(__dirname, 'node_modules');
var contextPath = Path.join(__dirname, 'client');
var entryPath = Path.join(contextPath, 'client.js');

// loaders
module.exports = {
  context: contextPath,
  entry: entryPath,
  resolve: ['', '.js', '.jsx'],
  output: {
    path: buildPath,
    filename: 'js/client.js'
  },
  module: {
    noParse: ['react', 'd3'],
    preLoaders: [{
      test: /\.(js|jsx)$/,
      loader: 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0,plugins[]=transform-decorators-legacy,plugins[]=transform-object-rest-spread',
      exclude: [nodeModulesPath]
    }],
    loaders: [
      {
        test: /index\.html/,
        loader: 'file?name=index.html'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        include: Path.join(contextPath, 'assets/img'),
        loader: 'url-loader?limit=8192&name=img/[hash].[ext]'
      }
    ]
  }
};
