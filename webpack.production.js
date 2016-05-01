import CompressionPlugin from 'compression-webpack-plugin'
import webpack from 'webpack'

export default {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    './client',
  ],
  module: {
    loaders: [{
      include: /client/,
      loaders: ['babel'],
      test: /\.js$/,
    },{
      include: /client/,
      loaders: ['style', 'css?modules'],
      test: /\.css$/,
    }],
  },
  output: {
    filename: './build/client.js',
    sourceMapFilename: './build/client.js.map',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false,
      },
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      asset: '[path].gz',
    }),
  ],
}
