const mongoose = require('mongoose');

// Schema for user name
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
});

// A defined schema for options to be selected by users
const selectionSchema = new mongoose.Schema({
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
const Selection = mongoose.model('Selection', selectionSchema);

module.exports = { User, Selection };
