/**
 * Module dependencies.
 */
var express = require('express')
var proxy = require('http-proxy-middleware') // require('http-proxy-middleware');

/**
 * Configure proxy middleware
 */
var jsonPlaceholderProxy = proxy({
  target: 'http://jsonplaceholder.typicode.com',
  changeOrigin: true, // for vhosted sites, changes host header to match to target's host
  logLevel: 'debug'
})

var app = express()

/**
 * Add the proxy to express
 */
app.use('/users', jsonPlaceholderProxy)

app.listen(3000)

