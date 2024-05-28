const express  = require('express')
const router = express.Router()
const path = require('path')

// Get all products
router.get('/', (req, res) => {
    console.log(req.query)
    res.render('product', {
        title: 'Laptop',
        username: 'James Bond',
        users: [
            {name: 'James'}, 
            {name: 'Agent 007'}
        ]
    })
})

// Get Product by ID
router.get('/:productId/edit/:slug', (req, res) => {
    console.log("Hello")
    res.send(`<h1>Product ID: ${req.params.productId}</h1>`)
})

router.post('/', (req, res) => {
    console.log(req.body)
    if(req.body.test === true) {
        throw new Error('Test is not allowed')
    }

    res.send(req.body)
})

// GET
// POST
// PUT
// PATCH
// DELETE

// path variable -> /product/100
// query parameter -> /produdct?name=iphone&color=red
// body parameter -> 

module.exports = {
    productRouter: router
}