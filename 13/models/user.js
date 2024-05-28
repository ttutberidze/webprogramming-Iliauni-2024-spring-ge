const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const {CredentialsSchema} = require('./credentials')

const UserSchema = mongoose.Schema({
    name: String,
    age: {
        type: Number,
        // required: true
    },
    credentials: {
        type: ObjectId,
        ref: 'Credentials',
        required: true
    },
    credentials2: {
        type: CredentialsSchema
    },
    tasks: [{
        type: ObjectId,
        ref: 'Task'
    }]
})

const User = mongoose.model('User', UserSchema)
module.exports = User