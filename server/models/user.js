let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    hashedPassword: { type: String },
    authToken: { type: String },
    shoppingCart: { type: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'CartObject' }] },
    newsletter: { type: Boolean }
});

userSchema.methods.serializeUser = (user) => {
    return { email: user.email, id: user.id };
};

module.exports = mongoose.model('User', userSchema);