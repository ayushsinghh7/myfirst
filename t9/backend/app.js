

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize=require('./util/database');
const data=require('./models/data');
const expense=require('./models/expense');
const order=require('./models/premium');
const app = express();
const core=require("cors");






const dataRoutes = require('./routes/data');
const expenseroute=require('./routes/expense');
const premium=require('./routes/premium');
//const expenseroute=require('./routes/expense');
const dot=require('dotenv');
dot.config();



app.use(core());
app.use(bodyParser.json({ extended: false }));
app.use(dataRoutes);
app.use(expenseroute)
app.use(premium);




app.use(errorController.get404);

data.hasMany(expense);
expense.belongsTo(data);

data.hasMany(order);
order.belongsTo(data);

sequelize.sync().then(result=>{
    //console.log(result);
    app.listen(3000);
}).catch(err=> console.log(err));



