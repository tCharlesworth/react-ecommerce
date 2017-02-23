///
/// Server Configuration File For All Default Settings Not
/// For server keys and stuff.
///

const Keys = require('./keys.js');

process.env.ENVIRONMENT = Keys.ENV || 'DEVELOPMENT';
process.env.SERVER_PORT = Keys.port || 3001;
process.env.MONGO_URI   = Keys.mongoURI;

process.env.BCRYPT_SALT_ROUNDS = Keys.bcrypt_salt_rounds || 10;
process.env.JWT_TOKEN_KEY      = Keys.jwt_secret;