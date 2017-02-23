let jwt = require('jsonwebtoken');

const KEY = process.env.JWT_TOKEN_KEY;
if(!KEY) {
    throw("Need a json web token key 'JWT_TOKEN_KEY'");
}

module.exports = {
    createToken(payload) {
        return jwt.sign(payload, KEY);
    },
    validateToken(token) {
        return jwt.verify(token, KEY);
    }
}