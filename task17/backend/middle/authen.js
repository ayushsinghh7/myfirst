const jwt = require('jsonwebtoken');
const User = require('../models/data');

const authenticate = (req, res, next) => {

    try {
        const token = req.header('Authorization');
        console.log(token);
        const user = jwt.verify(token, 'secretkey');
        console.log('userID >>>> ', user.batumId)
        User.findByPk(user.batumId).then(user => {

            req.user = user; ///ver
            next();
        })

      } catch(err) {
        console.log(err);
        return res.status(401).json({success: false})
        // err
      }

}

module.exports = {
    authenticate
}