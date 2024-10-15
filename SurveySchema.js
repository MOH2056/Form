const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    consumption: {
        type: String,
        required: true
    },
    favourite: {
        type: String,
        required: true
    },
    addition: {
        type: String,
        required: true
    },
    prefer: {
        type: String,
        required: true
    },
    benefits: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
