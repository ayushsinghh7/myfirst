const express=require('express');
const path=require('path');
const root=require('../util/path');
const rout=express.Router();

rout.get('/contactUs',(req,res,next)=>{
   
    res.sendFile(path.join(root,'views','contact.html'))
    
   });
   rout.post('/contactUs',(req,res,next)=>{
    console.log(req.body);
  res.redirect('/success');
   });
   module.exports=rout;