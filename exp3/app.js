//const http=require('http');

const express=require('express');
const bodyparser=require('body-parser');
const app=express();
const adminrouter=require('./route/admin');
const shopadmin=require('./route/shop');
app.use(bodyparser.urlencoded({extended:false}));

  app.use('/admin',adminrouter);
  app.use('/shop',shopadmin);
  app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not Found</h1>')
  })

app.listen(3000);

