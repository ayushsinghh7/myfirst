const path = require('path');

const express = require('express');

const productcontroller=require('../controllers/products');

const router = express.Router();

router.get('/',productcontroller.getProduct)

module.exports = router;
