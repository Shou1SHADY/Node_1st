var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()

app.use(cors())


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.get('/', (req, res) => {
    res.send('Express Hello World!')
})

// app.get('/products/:id', cors(), function (req, res, next) {
//     res.json({ msg: 'This is CORS-enabled for a Single Route' })
// })

app.listen(8080, function () {
    console.log('CORS-enabled web server listening on port 80')
}) 