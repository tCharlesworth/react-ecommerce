// https://hapijs.com/tutorials/auth?lang=en_US
const Basic  = require('hapi-auth-basic');

const BcryptHelper = require('./helpers/bcryptHelper.js');
const authCtrl = require('./controllers/authCtrl.js');

module.exports = (server, cb) => {
  console.log('setup auth');
  // Function to detrmine if user is authentic
  const validate = (request, email, pword, cb) => {
    console.log('Validating: ', email, pword);
    let user = authCtrl.validateUser(request, email, pword, cb);
    // if(!user) {
    //   console.log('No User Found');
    //   return cb(null, false);
    // }

    // // Compare PWORD HERE?
    // console.log('run bcrypt')
    // BcryptHelper.compare(pword, user.hashedPassword, (err, isValid) => {
    //   cb(err, isValid, authCtrl.serializeUser(user) );
    // });
  }

  // Register the auth strategy with the server
  server.register(Basic, (err) => {
    if (err) {
      console.log('err with register');
      throw(err);
    }
    console.log('registered Basic')
    server.auth.strategy('simple', 'basic', { validateFunc: validate });
    cb();
  });

};