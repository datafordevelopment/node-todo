import webpack from 'webpack'

export default {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:3005/__webpack_hmr',
    './client',
  ],
  module: {
    loaders: [{
      include: /client/,
      loaders: ['babel', 'eslint'],
      test: /\.js$/,
    },{
      include: /client/,
      loaders: ['style', 'css?modules'],
      test: /\.css$/,
    }],
  },
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
