const express = require('express')
const mongoose = require('mongoose')
const app = express()
const userRouter = require('./routes/user.routes')
const taskRouter = require('./routes/task.routes')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use('/user', userRouter)
app.use('/task', taskRouter)

mongoose.connect('mongodb+srv://iliauni:iliauni@cluster0.8dd2xz5.mongodb.net/task-management?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        app.listen(8888)
    })