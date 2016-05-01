import webpack from 'webpack'

export default {
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
}
