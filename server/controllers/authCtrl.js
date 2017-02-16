const Bcrypt = require('bcrypt');
let userModel = require('mongoose').model('User');

module.exports = {
    validateUser(request, email, password, cb) {
        userModel.findOne({email: email}, (err, user) => {
            if(err) {
                return cb(null, false);
            } else {
                // Validate Password
                Bcrypt.compare(password, user.hashedPassword, (err, isValid) => {
                    cb(err, isValid, user.serializeUser());
                });
            }
        })
        return null;
    }
};