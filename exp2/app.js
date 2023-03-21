//const http=require('http');

const express=require('express');
const bodyparser=require('body-parser');
const app=express();
app.use(bodyparser.urlencoded({extended:false}));
app.use('/',(req,res,next)=>{
console.log('This always runs');
next();
})
app.use('/add-product',(req,res,next)=>{
    //console.log('in another the middleware')
    res.send('<form action="/product" method="POST">Product<br><input type="text" name="title"><br>Size<br><input type="number" name="title1"><br><button type="submit"> Add product</button></form>');
    //res.send( {key1: 'value'});
   });
   app.use('/product',(req,res,next)=>{
    console.log(req.body);
  res.redirect('/');
   });

app.use('/',(req,res,next)=>{
    //console.log('in another the middleware')
    res.send('<h1>Hello from Express</h1>');
    //res.send( {key1: 'value'});
   });

// console.log('helloo');
// const server=http.createServer(app);
app.listen(3000);

