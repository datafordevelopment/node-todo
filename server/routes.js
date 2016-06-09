import Todo from './todo'
import compose from 'koa-compose'
import route from 'koa-route'

export default () => compose([
  route.get('/todos', getTodos),
  route.get('/favicon.ico', getFavicon),
  route.get('/error', triggerError),
  route.get('/todos/:id',getTodo),
  route.post('/todos',addTodo),
])

async function addTodo() {
  this.body = await new Todo({
    created: new Date(),
    text: this.request.body.text,
  }).save()
}

async function getFavicon() {
  this.body = 'favicon'
}

async function getTodo(ctx, id) {
  this.body = await Todo.where({ _id: id }).findOne()
}

async function getTodos() {
  this.body = await Todo.find()
}

async function triggerError() {
  this.body = this.doesnot.exist
}