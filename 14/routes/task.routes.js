const express = require('express')
const {createTask, getTaskById} = require('../controllers/task.controller')

const router = express.Router()

router.get('/', getTaskById)
router.post('/', createTask)

module.exports = router;