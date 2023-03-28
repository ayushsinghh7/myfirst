
const fs= require('fs');

const path=require('path');
const root=require('../util/path');
const p=path.join(root,'data','products.json');
 const a=callback=>{
    fs.readFile(p,(err,filecontent)=>{
        if(err){
            callback([]);
        }
        else{
        callback(JSON.parse(filecontent));
        }
           });

    };
module.exports=class Product{
    constructor(t){
        this.title=t;
    }
    save(){
   
        a(products=>{
            products.push(this);
       
        
        
            fs.writeFile(p,JSON.stringify(products),(err)=>{
               console.log(err);
                })
            });
    }
   
        static fetchAll(callback){
           a(callback);
        }
    
}