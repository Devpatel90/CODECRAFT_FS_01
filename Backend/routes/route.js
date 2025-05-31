const expresss = require('express');

const route = expresss.Router();

const ctl = require('../controllers/ctl');

route.post('/register', ctl.register);
// route.post('/login', ctl.login);    

module.exports = route;