import shared from './webpack-shared'
import webpack from 'webpack'

export default {
  ...shared,
  entry: [
    'webpack-hot-middleware/client',
    ...shared.entry,
  ],
  output: {
    filename: 'client.js',
    path: __dirname,
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
}
