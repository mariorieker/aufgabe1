//console.log("hello world");

var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('ok')
})

app.listen(8080)
