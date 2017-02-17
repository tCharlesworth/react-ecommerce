let UserModel = require('mongoose').model('User'),
    BcryptHelper = require('../helpers/bcryptHelper.js');

module.exports = {
    createUser(request, reply) {
        console.log('request: ', request.payload);
        BcryptHelper.hash(request.payload.password, (err, hash) => {
            if(err) {
                reply("Error hashing password").code(500);
            } else {
                console.log("HASHED!");
                // Create the user
                UserModel.create({
                    email:      request.payload.email,
                    password:   hash,
                    newsletter: request.payload.newsletter
                }, (err, user) => {
                    if(err) {
                        console.warn(err);
                        reply({msg: "Failed to create user", code: err.code}).code(500);
                    } else {
                        console.log('created new user');
                        reply(user.serializeUser());
                    }
                });
            }
        });
    }
};