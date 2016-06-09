import compose from 'koa-compose'
import config from './webpack-development'
import webpack from 'webpack'
import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware'

const compiler = webpack(config)

export default () => compose([
  devMiddleware(compiler, { noInfo: true }),
  hotMiddleware(compiler, {}),
])
