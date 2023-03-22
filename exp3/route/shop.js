const express=require('express');
const rout=express.Router();

rout.get('/',(req,res,next)=>{
    //console.log('in another the middleware')
    res.send('<h1>Hello from Express</h1>');
    //res.send( {key1: 'value'});
   });
   module.exports=rout;
