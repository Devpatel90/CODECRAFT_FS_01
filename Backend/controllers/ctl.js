const schema = require("../model/schema")
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

module.exports.register = async (req, res) => {
    let user = await schema.findOne({ email: req.body.email });
    if (user) {
        return res.status(200).json({ message: "User already exists" });
    }
    req.body.password = await bcrypt.hash(req.body.password, 10);
    await schema.create(req.body).then((data) => {
        return res.status(200).json({ message: "Registration Successful", data });
    })
}