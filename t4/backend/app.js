

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize=require('./util/database');

const app = express();
const core=require("cors");






const dataRoutes = require('./routes/data');
//const expenseroute=require('./routes/expense');


app.use(bodyParser.json({ extended: false }));

app.use(core());

app.use(dataRoutes);




app.use(errorController.get404);

sequelize.sync().then(result=>{
    //console.log(result);
    app.listen(3000);
}).catch(err=> console.log(err));



