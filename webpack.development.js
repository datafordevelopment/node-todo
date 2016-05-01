import shared from './webpack.config'
import webpack from 'webpack'

export default {
  ...shared,
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:3005/__webpack_hmr',
    './client',
  ],
  output: {
    filename: 'client.js',
    path: __dirname,
    publicPath: 'http://localhost:3005/',
  },
  plugins: [
    ...shared.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
}
