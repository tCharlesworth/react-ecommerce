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
    handler: userCtrl.createUser
  });

  // Admin Routes
  server.route({
    method: 'GET',
    path: '/admin/users',
    handler: userCtrl.getAllUsers
  });

  server.route({
    method: 'DELETE',
    path: '/admin/user/{userId?}',
    handler: userCtrl.removeUser
  });

  server.route({
    method: 'POST',
    path: '/admin/products',
    handler: productsCtrl.createProduct
  });
};