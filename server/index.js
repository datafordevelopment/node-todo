import 'source-map-support/register'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import errorHandlers from './error-handlers'
import mongoose from 'mongoose'
import routes from './routes'
import serve from 'koa-static'

process.on('uncaughtException', errorHandlers.process)
mongoose.connect(process.env.MONGOLAB_URI)

const app = new Koa()

app
  .on('error', errorHandlers.app)
  .use(serve(__dirname))
  .use(bodyParser())
  .use(routes())

if (process.env.NODE_ENV != 'production') {
  app.use(require('../webpack-middleware').default())
}

app.listen(process.env.PORT || 3000)
