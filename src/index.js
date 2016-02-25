import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import mongoose from 'mongoose'
import raven from 'raven'
import routes from './server/routes'

const sentry = new raven.Client(process.env.SENTRY_DSN, {
  release: process.env.HEROKU_RELEASE_VERSION,
})

process.on('uncaughtException', error => {
  console.error(error.stack)
  sentry.captureException(error)
  process.exit(1)
})

const app = new Koa()

mongoose.connect(process.env.MONGOLAB_URI)
routes.forEach(route => app.use(route))

app.on('error', sentry.captureException)
app.use(bodyParser())
app.listen(process.env.PORT || 3000)
