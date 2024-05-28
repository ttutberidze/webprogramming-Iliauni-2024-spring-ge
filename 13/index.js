const mongoose = require('mongoose');
const User = require('./models/user')
const {Credentials} = require('./models/credentials')

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

const main = async() => {
    await mongoose.connect('mongodb+srv://iliauni:iliauni@cluster0.8dd2xz5.mongodb.net/task-management?retryWrites=true&w=majority&appName=Cluster0')

    const user = await createUser()
    const users = await User.find().populate('credentials')
    console.log(users)
}

main()