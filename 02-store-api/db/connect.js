const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

function connectDB(url) {
    return mongoose.connect(url);
}

module.exports = connectDB;
