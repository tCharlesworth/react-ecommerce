///
/// Server Start File
///

// Load Libraries
const Hapi   = require('hapi');


// Load Configurations
require('./config/config.js');

// Create Server
const server = new Hapi.Server();
server.connection({ 
  port: process.env.SERVER_PORT, 
  host: 'localhost' ,
  routes: {
    cors: process.env.ENVIRONMENT != 'PRODUCTION'
  }
});

// Load the database
require('./database.js')(server);

// Load basic auth
require('./auth.js')(server, ()=> {
  //DO THE REST AFTER THE AUTH IS FINISHED
  // Load routes
  require('./routes.js')(server);

  // Start the Server
  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
  });
});

