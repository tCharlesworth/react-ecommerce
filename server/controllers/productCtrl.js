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
  }
}