const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize=require('./util/database');
const Product=require('./models/product');
const User=require("./models/user");
const cart=require("./models/cart");
const cartitems=require("./models/cart-items");

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req,res,next)=>{
    User.findByPk(1).then(user=>{
        req.user= user ;
        
        next();
    }).catch(err=>console.log(err))
})
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User,{ constraints:true,onDelete:'CASCADE'});
User.hasMany(Product);
User.hasOne(cart);
cart.belongsTo(User);
cart.belongsToMany(Product,{through:cartitems});
Product.belongsToMany(cart,{through:cartitems});
sequelize.sync().then(result=>{

    return User.findByPk(1)
  
}).then(user=>{
    if(!user){
       return User.create({Name:'max',Email:'text@loll'})
    }
    return user;
}).then(user=>{
  return user.createCart()
  //app.listen(3000);
     
})
.then(cart=>{
    app.listen(3000);
})
.catch(err=> console.log(err));


