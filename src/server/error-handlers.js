import raven from 'raven'

const sentry = new raven.Client(process.env.SENTRY_DSN, {
  release: process.env.HEROKU_RELEASE_VERSION,
})

export default {
  app(error, ctx) {
    setTimeout(() => delete(error.status))

    sentry.captureException(error, {
      'sentry.interfaces.Http': {
        data: Object.keys(ctx.request.body).length ? ctx.request.body : null,
        headers: ctx.headers,
        method: ctx.method,
        query_string: ctx.querystring,
        url: ctx.href,
      },
    })

    console.error(error.stack)
  },

  process(error) {
    sentry.captureException(error)
    console.error(error.stack)
  },
}
