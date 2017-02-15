let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name: {type: String},
    email: {type: String},
    hashedPassword: {type: String}
});

module.exports = mongoose.model('User', userSchema);