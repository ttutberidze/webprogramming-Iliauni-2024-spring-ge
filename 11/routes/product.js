const express  = require('express')
const router = express.Router()
const path = require('path')

router.use('/list', (req, res) => {
    res.send("<h5>List of products</h5>")
})

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'product-list.html'))
})

// GET
// POST
// PUT
// PATCH
// DELETE

module.exports = {
    productRouter: router
}