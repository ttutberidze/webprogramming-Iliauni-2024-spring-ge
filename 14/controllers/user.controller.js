const User = require('../models/user')

const createUser = async (req, res) => {
    const user = new User(req.body)
    res.json(await user.save())
}

const getUsers = async (req, res) => {
    const users = await User.find({})
    res.json(users)
}

module.exports = {createUser, getUsers}