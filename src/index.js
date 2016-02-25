import 'source-map-support/register'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import mongoose from 'mongoose'
import raven from 'raven'
import routes from './server/routes'

const app = new Koa()
const sentry = new raven.Client(process.env.SENTRY_DSN, {
  release: process.env.HEROKU_RELEASE_VERSION,
})

sentry.patchGlobal()
mongoose.connect(process.env.MONGOLAB_URI)
app.on('error', error => sentry.captureException(error))
app.use(bodyParser())
routes.forEach(route => app.use(route))

app.listen(process.env.PORT || 3000)
