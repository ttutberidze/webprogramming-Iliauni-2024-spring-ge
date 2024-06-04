const mongoose = require('mongoose')
const { ObjectId } = require('mongodb')

const TaskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean,
        default: false
    },
    user: {
        type: ObjectId,
        ref: 'User',
        require: true
    }
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task