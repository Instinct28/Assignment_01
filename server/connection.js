const mongoose = require('mongoose');

const connectDatabase = () => {
    return mongoose.connect('mongodb://localhost:27017/assignment').then(() => {
        console.log("Database connected");
    }).catch((err) => {
        console.log(err)
    });
}

module.exports = connectDatabase;