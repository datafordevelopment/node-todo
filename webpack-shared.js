export default {
  entry: [
    './client',
  ],
  module: {
    loaders: [{
      include: /client/,
      loader: 'babel',
      test: /\.js$/,
    },{
      include: /client/,
      loaders: ['style', 'css?modules'],
      test: /\.css$/,
    }],
  },
}
