let Bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

module.exports = {
  hash(data, cb) {
    Bcrypt.hash(data, SALT_ROUNDS, cb);
  },
  compare(data, data2, cb) {
    Bcrypt.compare(data, data2, cb);
  }
}