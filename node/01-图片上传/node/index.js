const express=require('express');
const app=express();
const fs=require('fs');

const bodyParser = require('body-parser'); //加载body-parser数据处理模块
app.use(bodyParser.json()); //设置中间件的请求数据格式
app.use(bodyParser.urlencoded({ extended: true })); //设置编码格式扩展

//设置跨域请求头
app.all('*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
   res.header("X-Powered-By",' 3.2.1')
   res.header("Content-Type", "application/json;charset=utf-8");
   next();
});



// 加载中间件     express.static(静态文件夹)
// app.use(express.static('public'))

app.listen(4002,(req,res)=>{
   console.log('服务器已启动')
})



const upload=require('./routes/upload.js');
app.use('/upload', upload);

