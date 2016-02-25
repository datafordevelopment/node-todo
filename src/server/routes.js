import Todo from './todo'
import route from 'koa-route'

export default [
  route.get('/',getTodos),
  route.get('/:id',getTodo),
  route.post('/',addTodo),
]

async function addTodo() {
  this.body = await new Todo({
    created: new Date(),
    text: this.request.body.text,
  }).save()
}

async function getTodo(ctx, id) {
  this.body = await Todo.where({ _id: id }).findOne()
}

async function getTodos() {
  this.body = await Todo.find()
}
