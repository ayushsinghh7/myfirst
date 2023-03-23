//const http=require('http');

const express=require('express');
const path=require('path')
const bodyparser=require('body-parser');
const app=express();
const adminrouter=require('./route/admin');
const shopadmin=require('./route/shop');
const contact=require('./route/contact');
const suces=require('./route/success');
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

  app.use('/admin',adminrouter);
  app.use(shopadmin);
  app.use(contact)
  app.use('/success',suces);
  app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
  })

app.listen(3000);

