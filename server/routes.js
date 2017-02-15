// Load Controllers
const productsCtrl = require('./controllers/productCtrl.js'),
      userCtrl     = require('./controllers/userCtrl.js');

module.exports = (server) => {

  // Authentication Routes
  
  // Product Routes
  server.route({
    method: 'GET',
    path: '/api/products',
    handler: productsCtrl.getProducts
  });

  // User Routes
  server.route({
    method: 'POST',
    path: '/api/user',
    handler: userCtrl.register
  });
};