const express = require('express');

const leadercontroller = require('../controllers/leader');

const authenticatemiddleware = require('../middle/authen');

const router = express.Router();

router.get('/showLeaderBoard', authenticatemiddleware.authenticate,leadercontroller.getUserLeaderBoard);


module.exports = router;