require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./db')
const router = require('./user')
const PORT = process.env.PORT || 10000;

connectDB();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

app.use('/', router);

app.listen(PORT,'0.0.0.0', () => {
    console.log(`SERVER IS RUNNING ON ${PORT}`);
});