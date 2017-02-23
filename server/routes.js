// Load Controllers
const productsCtrl = require('./controllers/productCtrl.js'),
      userCtrl     = require('./controllers/userCtrl.js'),
      authCtrl     = require('./controllers/authCtrl.js');

module.exports = (server) => {

  // Authentication Routes
  server.route({
    method: 'POST',
    path: '/api/login',
    handler: authCtrl.getLoginToken
  });
  
  // Product Routes
  server.route({
    method: 'GET',
    path: '/api/products',
    handler: productsCtrl.getProducts
  });

  server.route({
    method: 'GET',
    path: '/api/product/{productId?}',
    handler: productsCtrl.getProduct
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

  server.route({
    method: 'DELETE',
    path: '/admin/product/{productId?}',
    handler: productsCtrl.removeProduct
  });
};