let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true },
    hashedPassword: { type: String },
    shoppingCart: { type: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'CartObject' }] }
});

userSchema.methods.serializeUser = () => {
    return { name: this.name, id: this.id };
}

module.exports = mongoose.model('User', userSchema);