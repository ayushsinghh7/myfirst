const fs=require('fs');
const path=require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );

module.exports=class cart{
   static addProduct(id,productprice){
    fs.readFile(p,(err,filecontent)=>{
        let cart={products:[],totalpriceP:0};
    if(!err){
       cart=JSON.parse(filecontent);
    }
    const existingproductsindex=cart.products.findIndex(prod =>prod.id===id);
    const existingproducts=cart.products[existingproductsindex];
    let updatedproducts;
    if(existingproducts){
        updatedproducts={...existingproducts};
        updatedproducts.qty=updatedproducts.qty+1;
        cart.products=[...cart.products];
        cart.products[existingproductsindex]=updatedproducts;

    }else{
        updatedproducts={id:id,qty:1};
        cart.products=[...cart.products,updatedproducts];
    }
    cart.totalpriceP=cart.totalpriceP+  + productprice;
    fs.writeFile(p,JSON.stringify(cart),err=>{
        console.log(err);
    })
    
   })
}
}