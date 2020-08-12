const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
//上传图片的模板
var multer = require('multer');
//生成的图片放入uploads文件夹下
var upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './uploads/');
        },
        filename: function (req, file, cb) {
            var changedName = (new Date().getTime())+'-'+file.originalname;
            cb(null, changedName);
        }
    })
});

//单个文件上传
router.post('/single',upload.single('file'), (req,res)=>{
    console.log(req.file);
    res.json({
        code: '0000',
        type:'single',
        originalname: req.file.originalname
    })
});



//多个文件上传
app.post('/upload/multer',upload.array('multerFile'), (req,res)=>{
    console.log(req.files);
    let fileList = [];
    req.files.map((elem)=>{
        fileList.push({
            originalname: elem.originalname
        })
    });
    res.json({
        code: '0000',
        type:'multer',
        fileList:fileList
    });
});
module.exports = router;
