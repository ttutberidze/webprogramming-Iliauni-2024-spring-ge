const mongoose = require('mongoose');
const User = require('./models/user')
const {Credentials} = require('./models/credentials')
const Task = require('./models/task')

const createUser = async () => {
    const credentials = await (new Credentials({
        email: 'james@bond.com',
        password: '1234456'
    })).save()
    const user = new User({
        name: 'James Bond',
        // age: 30
        credentials: credentials._id,
        credentials2: credentials
    })
    return await user.save()
}

const createTask = async (userId, taskObject) => {
    const task = await (new Task(taskObject)).save()
    const user = await User.findOneAndUpdate({_id: userId}, {$push: {tasks: task._id}})
    return user;
}

const main = async() => {
    await mongoose.connect('mongodb+srv://iliauni:iliauni@cluster0.8dd2xz5.mongodb.net/task-management?retryWrites=true&w=majority&appName=Cluster0')

    const user = await createUser()
    await createTask(user._id, {name: 'Go to shop', isDone: true})
    await createTask(user._id, {name: 'Go to shop 2', isDone: true})
    const users = await User.find().populate('tasks')
    console.log(users.map((user) => user.tasks))
}

main()