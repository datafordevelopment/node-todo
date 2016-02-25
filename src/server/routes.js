import Todo from './todo'
import route from 'koa-route'

export default [
  route.get('',getTodos),
  route.post('',addTodo),
]

async function addTodo() {
  this.body = await new Todo({
    created: new Date(),
    text: this.request.body.text,
  }).save()
}

async function getTodos() {
  this.body = await Todo.find()
}
