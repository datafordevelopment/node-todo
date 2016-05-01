import 'source-map-support/register'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import errorHandlers from './server/error-handlers'
import mongoose from 'mongoose'
import page from './server/page'
import routes from './server/routes'

process.on('uncaughtException', errorHandlers.process)
mongoose.connect(process.env.MONGOLAB_URI)

new Koa()
  .on('error', errorHandlers.app)
  .use(page())
  .use(bodyParser())
  .use(routes())
  .listen(process.env.PORT || 3000)
