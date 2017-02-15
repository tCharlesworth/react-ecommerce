const mongoose = require('mongoose');

let CartObjectSchema = mongoose.Schema({
  productId: { type: mongoose.SchemaTypes.ObjectId, ref: 'Product' },
  userId: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
  quantity: { type: Number }
});

module.exports = mongoose.model('CartObject', CartObjectSchema);