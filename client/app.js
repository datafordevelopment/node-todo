import { Component } from 'react'
import TodoList from './todo-list'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      newTodo: '',
      todos: [],
    }
  }

  addTodo() {
    const request = {
      body: JSON.stringify({ text: this.state.newTodo }),
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
    }

    fetch('todos', request)
      .then(response => response.json())
      .then(todo => this.setState({ todos: [todo, ...this.state.todos] }))
  }

  componentDidMount() {
    fetch('todos')
      .then(response => response.json())
      .then(todos => this.setState({ todos }))
  }

  render() {
    return (
      <div>
        <input
          onChange={e => this.setState({ newTodo: e.target.value })}
          value={this.state.newTodo} />
        <button onClick={() => this.addTodo()}>Add Todo</button>
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}
