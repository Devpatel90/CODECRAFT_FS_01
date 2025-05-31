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

module.exports.login = async (req, res) => {
    let admin = await schema.findOne({ email: req.body.email });
    if (!admin) {
        return res.status(200).json({ message: "User not found",code:100 });
    }
    if(await bcrypt.compare(req.body.password, admin.password)) {
        const token = jwt.sign({admin},"abc", { expiresIn: '1h' });
        return res.status(200).json({ message: "Login Successful", token:token, code: 200 });     
    }
    else {
        return res.status(200).json({ message: "Invalid Password", code: 102 });
    }
}