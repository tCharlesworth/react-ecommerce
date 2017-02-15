///
/// Server Start File
///

// Load Libraries
const Hapi = require('Hapi');

// Load Configurations
const config = require('./config/config.js');

// Create Server
const server = new Hapi.Server();
server.connection({ 
  port: config.port, 
  host: 'localhost' ,
  routes: {
    cors: config.ENV != 'PRODUCTION'
  }
});

// Load routes
require('./routes.js')(server);

// Start the Server
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});