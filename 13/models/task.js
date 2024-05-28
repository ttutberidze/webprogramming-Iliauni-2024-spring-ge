const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
    name: String,
    isDone: Boolean
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task