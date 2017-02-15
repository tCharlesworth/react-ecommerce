///
/// Server Configuration File For All Default Settings Not
/// For server keys and stuff.
///

const Keys = require('./keys.js');

module.exports = {
  ENV: Keys.ENV || 'DEVELOPMENT',
  port: Keys.port || 3001,
  mongoURI: Keys.mongoURI
};