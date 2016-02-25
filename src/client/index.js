import { render } from 'react-dom'
import App from './components/app'

const todos = JSON.stringify(window.__TODOS__)

render(<App todos={todos} />, document.getElementById('app'))
