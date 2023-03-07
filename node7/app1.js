





const htttps=  require('http');

const server=htttps.createServer((req,res)=>{
    //console.log('Ayush')
    const url=req.url;
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
        if(url==='/node'){
            console.log(req.method,req.url)
            res.setHeader('Content-Type','text/html')
            res.write('<html>')
            res.write('<head><title>about</title></head>')
            res.write('<body><h1> Welcome to my  Node Js project</h1></body>')
            res.write('</html>')
           return res.end();
            }

   
});
server.listen(4000)