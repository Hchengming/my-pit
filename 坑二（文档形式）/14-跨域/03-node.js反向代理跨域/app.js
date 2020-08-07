
const express=require('express')
const app=express()


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

app.listen(3000,function(){
    console.log('服务器已打开')
})