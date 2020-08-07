




const express=require('express')
const app=express()

//CORS跨域 注意，这个代码一定要，写在注册路由的前面。
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/list',(req,res,next)=>{
    res.json({
        status:'0',
        msg:'',
        result:{
            name:"哈哈",
            age:100
        }
    })
})

app.listen(3030,function(){
    console.log('服务器已打开')
})