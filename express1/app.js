const http=require('http');

const express=require('express');
const app=express();
app.use((req,res,next)=>{
 console.log('in the middleware')
 next();
});
app.use((req,res,next)=>{
    console.log('in another the middleware')
    res.send('<h1>Hello from Express</h1>');
    res.send( {key1: 'value'});
   });

console.log('hello');
const server=http.createServer(app);
server.listen(3000);

