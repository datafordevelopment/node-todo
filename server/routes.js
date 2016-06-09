import Todo from './todo'
import compose from 'koa-compose'
import route from 'koa-route'

export default () => compose([
  route.get('/todos', async function() {
    this.body = await Todo.find()
  }),

  route.get('/error', async function() {
    this.body = this.doesnot.exist
  }),

  route.get('/todos/:id',  async function(ctx, id) {
    this.body = await Todo.where({ _id: id }).findOne()
  }),

  route.post('/todos', async function() {
    this.body = await new Todo({
      created: new Date(),
      text: this.request.body.text,
    }).save()
  }),
])
