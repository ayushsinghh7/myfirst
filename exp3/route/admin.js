const express=require('express');
const router=express.Router();
router.get('/add-product',(req,res,next)=>{
    //console.log('in another the middleware')
    res.send('<form action="/admin/product" method="POST">Product<br><input type="text" name="title"><br>Size<br><input type="number" name="title1"><br><button type="submit"> Add product</button></form>');
    //res.send( {key1: 'value'});
   });
   router.post('/product',(req,res,next)=>{
    console.log(req.body);
  res.redirect('/shop');
   });
  module.exports=router;