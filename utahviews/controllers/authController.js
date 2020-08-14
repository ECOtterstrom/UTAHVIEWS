const db = require("../models");
const Axios = require('axios');
const { User } = require("../models");

// Defining methods for the citiesController
module.exports = {

  login: (req, res) => {
    console.log('logged in', req.user);
    res.json(req.user.username);
},

  createUser: (req, res) => {
    const user = new User(req.body);
    user.hashPassword(req.body.password);
    db.User.create(user).then(dbUser => res.json(dbUser))
  }
};
