const express=require('express');
const path=require('path');
const root=require('../util/path')
const router=express.Router();
router.get('/add-product',(req,res,next)=>{
    //console.log('in another the middleware')
    //res.send('<form action="/admin/product" method="POST">Product<br><input type="text" name="title"><br>Size<br><input type="number" name="title1"><br><button type="submit"> Add product</button></form>');
    //res.send( {key1: 'value'});
    //res.sendFile(path.join(__dirname,'../','views','add-product.html'))
    res.sendFile(path.join(root,'views','add-product.html'))

   });
   router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
  res.redirect('/');
   });
  module.exports=router;