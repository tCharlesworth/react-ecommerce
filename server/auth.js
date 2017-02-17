// https://hapijs.com/tutorials/auth?lang=en_US
const Basic  = require('hapi-auth-basic');

const BcryptHelper = require('./helpers/bcryptHelper.js');
const authCtrl = require('./controllers/authCtrl.js');

module.exports = (server) => {
  // Function to detrmine if user is authentic
  const validate = (request, uname, pword, cb) => {
    let user = authCtrl.validateUser(uname, pword);
    if(!user) {
      return cb(null, false);
    }

    // Compare PWORD HERE?
    console.log('run bcrypt')
    BcryptHelper.compare(pword, user.hashedPassword, (err, isValid) => {
      cb(err, isValid, authCtrl.serializeUser(user) );
    });
  }

  // Register the auth strategy with the server
  server.register(Basic, (err) => {
    if (err) {
      throw(err);
    }

    server.auth.strategy('simple', 'basic', { validateFunc: validate });
  });

};