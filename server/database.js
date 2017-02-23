const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;
if(!MONGO_URI) {
    throw("Database could not find the mongo URI. Key required: 'MONGO_URI'");
}

// Load models
let UserModel    = require('./models/user.js'),
    ProductModel = require('./models/product.js');

module.exports = (server) => {
    mongoose.connect(MONGO_URI);
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('Database connected on: '+MONGO_URI)
    });
};