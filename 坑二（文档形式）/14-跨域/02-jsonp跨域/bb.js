const express=require('express');
const app=express();

app.get('/list',(req,res,next)=>{
    res.jsonp({
        status:'0',
        msg:'',
        data:{
          aa:'123',
          bb:'345'
        }

    })
})

app.listen(3000,function(){
    console.log('服务器已启动')
})