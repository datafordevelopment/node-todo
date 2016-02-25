import Todo from './todo'

export default ({ addTodo, todos }) => (
  <ul>
    {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
  </ul>
)
