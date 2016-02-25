import { Component } from 'react'
import TodoList from './todo-list'

export default class App extends Component {
  constructor({ todos }) {
    super()

    this.state = {
      todos,
    }
  }

  addTodo() {
    const todos = [
      ...this.state.todos,
      { id: todos.length + 1, text: 'New Todo' },
    ]

    this.setState({ todos })
  }

  render() {
    return (
      <div>
        <button onClick={this.addTodo}>Add Todo</button>
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}
