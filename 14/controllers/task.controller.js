const Task = require("../models/task")

const createTask = async (req, res) => {
    const task = new Task(req.body)
    res.json(await task.save())
}

const getTaskById = async (req, res) => {
    const userId = req.query.userId
    if(!userId) {
        return res.status(400).json({message: 'userId is required'})
    }
    const task = await Task.find({user: userId}).populate('user')
    res.json(task)
}

module.exports = {createTask, getTaskById}