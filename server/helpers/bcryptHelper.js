let Bcrypt = require('bcrypt');

const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS;
if(!SALT_ROUNDS) {
  throw("Bcrypt require salt rounds. Key required: 'BCRYPT_SALT_ROUNDS'")
}

module.exports = {
  hash(data, cb) {
    Bcrypt.hash(data, SALT_ROUNDS, cb);
  },
  compare(data, data2, cb) {
    Bcrypt.compare(data, data2, cb);
  }
}