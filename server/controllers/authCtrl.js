const Bcrypt = require('bcrypt');
let userModel = require('mongoose').model('User');

module.exports = {
    validateUser(request, email, password, cb) {
        userModel.findOne({email: email}, (err, user) => {
            if(err) {
                console.error('ERR FINDING USER FOR AUTH: ', err);
                return cb(null, false);
            } else {
                if(user) {
                    // Validate Password
                    Bcrypt.compare(password, user.hashedPassword, (err, isValid) => {
                        if(err) {
                            console.log(err);
                        }
                        cb(err, isValid, user.serializeUser());
                    });
                } else {
                    cb(null, false);
                }
            }
        })
        return null;
    }
};