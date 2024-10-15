const mongoose = require('mongoose')
require('dotenv').config()

const connect = async () => {
    try{
        await mongoose.connect(process.env.DB_uri)
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1);
    }
}

module.exports = connect;