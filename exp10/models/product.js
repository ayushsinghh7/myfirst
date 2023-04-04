const fs = require('fs');
const path = require('path');
const cart=require('./cart');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(Id,title, imageUrl, description, price) {
     this.Id=Id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
   
    getProductsFromFile(products => {
       if(this.Id){
      const existingproductindex=products.findIndex(prod=>prod.Id===this.Id);
      const updatedproduct=[...products];
      updatedproduct[existingproductindex]=this;
      fs.writeFile(p, JSON.stringify(updatedproduct), err => {
        console.log(err);
      });

    }
    else{
    this.Id=Math.random().toString();
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    }
    });
  
  }
  static deletebyid(Id){
    getProductsFromFile(products=>{
      const product=products.find(pro=>pro.Id===Id);
      const updatedproduct=products.filter(pro=>pro.Id!== Id);
      fs.writeFile(p, JSON.stringify(updatedproduct),err=>{
        if(!err){
         cart.deleteproduct(Id)
        }
      });
    })
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
  static findmyid(Id,cb){
    getProductsFromFile(products=>{
      const product=products.find(p=>p.Id===Id);
      cb(product);

    })
  }
};
