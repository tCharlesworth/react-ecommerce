let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    hashedPassword: { type: String },
    shoppingCart: { type: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'CartObject' }] },
    newsletter: { type: Boolean }
});

userSchema.methods.serializeUser = () => {
    return { email: this.email, id: this.id };
};

module.exports = mongoose.model('User', userSchema);