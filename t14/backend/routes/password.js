const express = require('express');

const resetpasswordController = require('../controllers/password');


const router = express.Router();



router.use('/forgotpassword',resetpasswordController.forgotpassword)

module.exports = router;