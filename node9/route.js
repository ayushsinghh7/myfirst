const fs=require('fs');
 
 const requesthandler=(req,res)=>{
const url=req.url;
    const method=req.method;
    if(url==='/home'){
    console.log(req.method,req.url)
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>first</title></head>')
    res.write('<body><h1> Welcome home</h1></body>')
    res.write('</html>')
   return res.end();
    }
    if(url==='/about'){
        console.log(req.method,req.url)
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>about</title></head>')
        res.write('<body><h1> Welcome to About Us page</h1></body>')
        res.write('</html>')
       return res.end();
        }
    if(url==='/'){
        console.log(req.method,req.url)
        fs.readFile('message.txt',{encoding:'utf-8'},(err,data)=>{
          if(err){
            console.log(err);
          }
          console.log(data);
        
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write(`<body>${data}</body>`);
        res.write('<body><form action="/message"  method="POST"><input type="text" name="message"><button type="submit" >send</button></form></body>')
        res.write('</html>')
       return res.end();
        })
      }
      
          if(url==='/message'&& method==='POST'){
            const bodyy=[];
            req.on('data',(chunk)=>{
             console.log(chunk);
             bodyy.push(chunk);
            });
            req.on('end',()=>{
                const parsedbody=Buffer.concat(bodyy).toString();
                console.log(parsedbody);
                const message=parsedbody.split('=')[1];
                fs.writeFile('message.txt',message,err=>{
                
    
                  res.statusCode='302';
            res.setHeader('Location','/');
            return res.end();  
                });
               
            });
    
            
            
          }
        if(url==='/node'){
            console.log(req.method,req.url)
            res.setHeader('Content-Type','text/html')
            res.write('<html>')
            res.write('<head><title>about</title></head>')
            res.write('<body><h1> Welcome to my  Node Js project</h1></body>')
            res.write('</html>')
           return res.end();
            }
        }
        module.exports=requesthandler;