const express=require('express');
const fs=require('fs');
const bodyparser=require('body-parser');
const project=express();

project.use(bodyparser.urlencoded({extended:false}));

project.get('/',(req,res,next)=>{
    fs.readFile('username.text',(err,data)=>{
        if(err){
            data='No chat exist';
        }
   
    res.send(`${data}<form action="/" onsubmit="  document.getElementById('username').value=localStorage.getItem('username')"  method="POST">
    chat<br><input id="message" type="text" name="message"><br>
    <input id="username" type="hidden" name="username"><br>
    <button type="submit"> Send</button></form>`)
     })
});
project.post('/',(req,res,next)=>{
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile('username.text',`${req.body.username} : ${req.body.message}`,{flag:'a'},(err)=>{
        err ? console.log(err):res.redirect('/')
    })
    

})
project.get("/login",(req,res,next)=>{
res.send(`<form method="POST" action="/"
onsubmit="localStorage.setItem('username',document.getElementById('username').value)">
 <input id="username" type="text" placeholder="username" name="username"><br>
 <input id="message" type="hidden" name="message">

 <button type="submit"> Login</button></form>`)

 
})
project.listen(3000);