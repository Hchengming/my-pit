
var express = require('express');
var fs=require("fs");
var app = express();

//方法1：通过express.static访问静态文件，这里访问的是index.html
app.use(express.static("./"));

app.listen(3000, function() {   //监听http://127.0.0.1:3000端口
    console.log("server start");
});













// 方法二

// http.createServer(function (response, res) {
//     fs.readFile('./index.html','utf-8',function(err, data) {//读取内容
//         if(err) throw err;
//         response.setHeader('content-type', 'text/html;charset=utf-8');
//         response.writeHead(200, {"Content-Type": "text/plain"});
//         response.write(data);
//         response.end();
//     })

// }).listen(3000, "127.0.0.1");

// console.log("Server running at http://127.0.0.1:8080/");  