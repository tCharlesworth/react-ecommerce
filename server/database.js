const mongoose = require('mongoose');

module.exports = (server, config) => {
    mongoose.connect(config.mongoURI);
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('Database connected on: '+config.mongoURI)
    });
};