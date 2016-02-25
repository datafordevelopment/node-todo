export default () => (async (ctx, next) => {
  if (ctx.accepts('html')) {
    ctx.body = `
      <!DOCTYPE html>
      <html>
        <head>
          <link rel="icon" href="data:;base64,iVBORw0KGgo="">
          <title>Todos</title>
        </head>
        <body>
          <h1>Todos</h1>
          <div id="app"></div>
        </body>
      </html>`
  }
  else {
    await next()
  }
})
