var ProductModel = require('mongoose').model('Product');

module.exports = {
  getProducts(request, reply) {
    ProductModel.find().exec((err, products) => {
      if(err) {
        console.warn('Could not get products');
        reply({msg: 'Could not get products', code: err.code});
      } else {
        reply(products);
      }
    });
  },

  createProduct(request, reply) {
    ProductModel.create({
      name: request.payload.name,
      price: request.payload.price
    }, (err, product) => {
      if(err) {
        console.warn('Could not create product');
        reply({msg: 'Could not create product', code: err.code});
      } else {
        reply(product);
      }
    });
  },

  removeProduct(request, reply) {
    ProductModel.remove({_id: request.params.productId}).exec((err) => {
      if(err) {
        console.warn('Could not remove product');
        reply({msg: 'Could not remove product', code: err.code});
      } else {
        reply('OK');
      }
    });
  }
}