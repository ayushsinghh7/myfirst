const express=require('express');
const path=require('path');
const root=require('../util/path');
const rout=express.Router();

rout.get('/',(req,res,next)=>{
    //console.log('in another the middleware')
    //res.sendFile(path.join(__dirname,'../','views','shop.html'))
    res.sendFile(path.join(root,'views','shop.html'))
    //res.send( {key1: 'value'});
   });
   module.exports=rout;
