///
/// Server Configuration File For All Default Settings Not
/// For server keys and stuff.
///

const Keys = require('./keys.js');

const Config = {
  ENV: Keys.ENV || 'DEVELOPMENT',
  port: Keys.port || 3001
};

module.exports = Config;