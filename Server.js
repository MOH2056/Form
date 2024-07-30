require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { User, Selection } = require('./Model/SurveySchema');

const app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.DB_uri, {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.log('AN ERROR JUST OCCURED, NOT CONNECTED'));

app.get("/login", (req, res) => {
    res.render("index");
});

app.post("/submit", async (req, res) => {
    const { firstname, lastname, consumption, favourite, addition, prefer, benefits, brand } = req.body;

    try {
        // Save user
        const user = new User({ firstname, lastname });
        await user.save();

        // Save selection
        const selection = new Selection({ consumption, favourite, addition, prefer, benefits, brand });
        await selection.save();

        res.status(201).send("THANK YOU FOR FILING MY FORM!");
    } catch (err) {
        res.status(500).send("An error occurred while saving data.");
    }
});

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON ${PORT}`);
});

