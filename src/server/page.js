import { renderToString } from 'react-dom/server'
import App from '../components/app'

export default todos => (`
  <!DOCTYPE html>
  <html>
    <head>
      <link rel="icon" href="data:;base64,iVBORw0KGgo="">
      <title>Todos</title>
      <script type="text/javascript">
        window.__TODOS__ = ${JSON.stringify(todos)}
      </script>
    </head>
    <body>
      <h1>Todos</h1>
      <div id="app">
        ${renderToString(<App todos={todos} />)}
      </div>
    </body>
  </html>`
)
