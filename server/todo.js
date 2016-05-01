import mongoose from 'mongoose'

export default mongoose.model('Todo', mongoose.Schema({
  created: Date,
  text: String,
}))
