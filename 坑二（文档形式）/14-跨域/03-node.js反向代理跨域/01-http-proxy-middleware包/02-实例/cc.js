var express = require('express');
var proxy = require("http-proxy-middleware");
var app = express()
app.use('/', proxy({
  target: 'http://localhost:3000',
  changeOrigin: true
}))


app.listen(4000);

// require('opn')('http://localhost:4000/api')