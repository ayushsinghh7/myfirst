const  Product  = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.findAll().then((product)=>{
 res.render('shop/product-list', {
      prods: product,
      pageTitle: 'All Products',
      path: '/products'
    });

  }).catch(err=>console.log(err));
   
  };


exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findAll({where:{id:prodId}})
  .then(product=>{
     res.render('shop/product-detail', {
      product: product[0],
      pageTitle: product[0].title,
      path: '/products'
    });
  }).catch(err=>console.log(err));
   
  
};

exports.getIndex = (req, res, next) => {
  Product.findAll()
  .then((product)=>{
    res.render('shop/index', {
      prods: product,
      pageTitle: 'Shop',
      path: '/'
      });  

  }).catch(err=> console.log(err));
     

};

exports.getCart = (req, res, next) => {
  req.user.getCart().then(cart=>{
    //console.log(cart);
    return cart.getProducts().then(products=>{
      res.render('shop/cart', {
              path: '/cart',
              pageTitle: 'Your Cart',
              products: products
            });

    }).catch(err=>console.log(err))
  }).catch(err=>console.log(err))

};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  let fetchedcart;
  let newQuantity=1;
  req.user.getCart().then(cart=>{
    fetchedcart=cart;
    return cart.getProducts({where:{id:prodId}})
  }).then(products=>{
    let product;
    if(products.length>0){
      product=products[0]
    }
    
    if(product){
     
     var oldq=product.cartitems.quantity;
                
     newQuantity=oldq+1;
     console.log(newQuantity+'hello')
     return product;
    }
    return Product.findByPk(prodId)
  })
    .then(product=>{
      //console.log(product.cartitems.quantity)
        return fetchedcart.addProduct(product,{ through: {quantity:newQuantity} });

    }).then(()=>{
      res.redirect('/cart');
    }).catch(err=>console.log(err))

  .catch(err=>console.log(err));
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user.getCart().then(cart=>{
    
    return cart.getProducts({where:{id:prodId}})
  }).then(products=>{
    const product=products[0];
    return product.cartitems.destroy();
  }).then(result=>{
    res.redirect('/cart');
  }).catch(err=>console.log(err))
 
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
