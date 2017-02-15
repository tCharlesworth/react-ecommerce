// https://hapijs.com/tutorials/auth?lang=en_US
const BCrypt = require('bcrypt'),
      Basic  = require('hapi-auth-basic');

module.exports = (server) => {
  // Serialize takes a user and explicitly defines properties to include.
  const serializeUser = (user) => {
    return {name:  user.name, id: user.id };
  }

  // Function to detrmine if user is authentic
  const validate = (request, uname, pword, cb) => {
    let user = null;
    if(!user) {
      return cb(null, false)
    }

    // Compare PWORD HERE
    BCrypt.compare(pword, user.hashedPassword, (err, isValid) => {
      cb(err, isValid, serializeUser(user) )
    });
  }

  // Register the auth strategy with the server
  server.register(Basic, (err) => {
    if (err) {
      throw(err);
    }

    server.auth.strategy('simple', 'basic', { validateFunc: validate });
  })

};