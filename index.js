//const fs = require('fs'); //import

// const folderPath = "C:\\Users\\Dell\\Desktop\\NODE";

// fs.readdir(folderPath, (err, files) => { //callback function
//     console.log("files : " + files);
//     files.forEach(function (filename, index) {
//         console.log("filename : " + filename);


//         var filepath = "C:\\Users\\Dell\\Desktop\\NODE\\" + filename;
//         fs.readFile(filepath, "utf-8", (err, content) => {
//             console.log("filename : " + content);
//         })

//     })

// });

//LESSON 2
// var filepath_2 = "C:\\Users\\Dell\\Desktop\\NODE\\package.json";

// var content_2 = fs.readFileSync(filepath_2, "utf-8");

// console.log("content : " + content_2);

//LESSON 3 
//var log = require('./user');
//log.error("HAHA"); 

var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var noteRoute = require("./Route/noteRoute");
var storeRoute = require("./Route/storeRoute");
var bookRoute = require("./Route/bookRoute");
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
app.use("/api/v1", noteRoute) //fault api/v1/
app.use("/api/v1", storeRoute)
app.use("/api/v1", bookRoute)
app.listen(8000, function () {
    console.log('CORS-enabled web server listening on port 80')
}) 