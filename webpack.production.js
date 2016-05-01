import CompressionPlugin from 'compression-webpack-plugin'
import shared from './webpack.config'
import webpack from 'webpack'

export default {
  ...shared,
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    './client',
  ],
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
