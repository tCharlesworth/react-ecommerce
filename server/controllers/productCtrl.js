var ProductModel = require('mongoose').model('Product');

module.exports = {
  getProducts(request, reply) {
    ProductModel.find().exec((err, products) => {
      if(err) {
        console.warn('Could not get products');
        reply({msg: 'Could not get products', code: err.code}).code(500);
      } else {
        reply(products);
      }
    });
  },

  getProduct(request, reply) {
    ProductModel.findOne({_id: request.params.productId}).exec((err, product) => {
      if(err) {
        console.warn('Could not find product');
        reply({msg: 'Could not find product', code: err.code}).code(500);
      } else {
        reply(product);
      }
    })
  },

  createProduct(request, reply) {
    ProductModel.create({
      name: request.payload.name,
      price: request.payload.price,
      description: request.payload.description,
      images: request.payload.images
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