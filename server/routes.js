// Load Controllers
const productsCtrl = require('./controllers/productCtrl.js');

module.exports = (server) => {
  
  server.route({
    method: 'GET',
    path: '/products',
    handler: productsCtrl.getProducts()
  })
};