let mongoose = require('mongoose');

let productSchema = mongoose.Schema({
    name: {type: String},
    price: {type: Number},
    images: {type: [String]},
    defaultImage: {type: String},
    description: {type: String},
    productType: {type: String},
    productSize: {type: String}
});

module.exports = mongoose.model('Product', productSchema);