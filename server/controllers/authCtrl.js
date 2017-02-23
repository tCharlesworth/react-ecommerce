const Bcrypt = require('bcrypt');

let userModel = require('mongoose').model('User'),
    jwtHelper = require('../helpers/jwtHelper');

module.exports = {
    validateUser(request, reply) {
        let email = request.payload.username;
        let password = request.payload.password;

        userModel.findOne({email: email}, (err, user) => {
            if(err) {
                console.error('ERR FINDING USER FOR AUTH: ', err);
                reply().code(500);
            } else {
                if(user) {
                    // Validate Password
                    Bcrypt.compare(password, user.hashedPassword, (err, isValid) => {
                        if(err) {
                            console.error('ERR VALIDATING PASSWORD: ', err);
                            reply().code(500);
                        } else {
                            reply(user.serializeUser(user));
                        }
                    });
                } else {
                    console.log('User not found');
                    reply().code(401);
                }
            }
        });
    },

    getLoginToken(request, reply) {
        let email = request.payload.username;
                let password = request.payload.password;

                userModel.findOne({email: email}, (err, user) => {
                    if(err) {
                        console.error('ERR FINDING USER FOR AUTH: ', err);
                        reply().code(500);
                    } else {
                        if(user) {
                            // Validate Password
                            Bcrypt.compare(password, user.hashedPassword, (err, isValid) => {
                                if(err) {
                                    console.error('ERR VALIDATING PASSWORD: ', err);
                                    reply().code(500);
                                } else {
                                    console.log('User valid');
                                    // Generate a token
                                    let token = jwtHelper.createToken(user.serializeUser(user));
                                    // Save the token to the user
                                    user.authToken = token;
                                    user.save((err, u) => {
                                        if(err) {
                                            console.error('ERR SAVING TOKEN TO USER: ', err);
                                            reply().code(500);
                                        } else {
                                            console.log('token saved.');
                                            reply(token);
                                        }
                                    });
                                }
                            });
                        } else {
                            console.log('User not found');
                            reply().code(401);
                        }
                    }
                });
    },

    validateToken(request, reply) {
        let token = request.payload.token;
        reply();
    }
};