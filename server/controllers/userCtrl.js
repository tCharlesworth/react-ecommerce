let UserModel = require('mongoose').model('User');

module.exports = {
    createUser(request, reply) {
        console.log('request: ', request);
        reply('OK');
    }
};