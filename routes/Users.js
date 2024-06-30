const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const bcrypt = require("bcrypt");
const { sign } = require('jsonwebtoken');

router.post("/", async (req, res) => {
    const { username, password, mobile, email } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            password: hash,
            mobile: mobile,
            email: email
        });
        res.json("Success");
    });
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await Users.findOne({ where: { username: username } });

        if (!user) {
            return res.json({ error: "User Doesn't Exist" });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.json({ error: "Wrong Username and Password" });
        }

        const accessToken = sign(
            { username: user.username, id: user.id },
            "importantsecret"
        );
        res.json({ token: accessToken, username: user.username });

    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
