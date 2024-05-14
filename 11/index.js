// const fs = require('fs');
// const http = require('http')
// fs.writeFile('./asyncFile', 'Hello WOrld', {}, (error, data) => {
//     console.log('File was writted successfully');
// });

// const app = http.createServer((request, response) => {
//     console.log(request.url)
//     response.write("<h1>Welcome</h1>")
//     response.write("<h2>To Node</h2>")
//     response.end()
// })

// app.listen(8881)

const express = require('express')
const app = express()
const {productRouter} = require('./routes/product')

app.use('/about', (req, res) => {
   console.log(req.url)
   res.send("<h1>Welcome</h1>")
})

app.use('/home', (req, res) => {
    console.log(req.url)
    res.send("<h1>Welcome Home</h1>")
 })

 app.use('/product', productRouter)

app.listen(8881)