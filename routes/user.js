const express = require('express')
const route = express.Router()
const User = require('../model/SurveySchema')

route.get("/", (req, res) => {
    res.render("index");
});

route.post("/submit", async (req, res) => {
    const { firstname, lastname, consumption, favourite, addition, prefer, benefits, brand } = req.body;
    try {
        const user = new User({
            firstname,
            lastname,
            consumption,
            favourite,
            addition,
            prefer,
            benefits,
            brand
        })
        await user.save()
        return res
        .status(201)
        .send(`THANKS FOR FILLING.....<br>
            ${consumption}<br>
            My favourite is ${favourite}<br>
            I prefer ${addition}<br>
            Preference is ${prefer}<br>
            Benefits: ${benefits}<br>
            Brand: ${brand}`);
    } catch (err) {
        res.status(500).send("Opps!..");
    }
});

module.exports = route;