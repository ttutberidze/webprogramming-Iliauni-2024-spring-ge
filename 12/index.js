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
const bodyParser = require('body-parser')
const {authMiddleware} = require('./middleware.js')

app.set('view engine', 'ejs');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/about', (req, res) => {
   console.log(req.url)
   res.send("<h1>Welcome</h1>")
})

app.use('/home', (req, res) => {
    console.log(req.url)
    res.send("<h1>Welcome Home</h1>")
 })

 app.use('/product', authMiddleware, productRouter)

 app.use((error, req, res, next) => {
   console.log(error.message);
   res.status(409).send({
      message: error.message
   })
 })

app.listen(8881)