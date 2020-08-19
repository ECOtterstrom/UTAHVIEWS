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
  },
  populateFavorites: function (req, res) {
    db.User.findById(req.params.id)
      .populate("favorites")
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  },
  fetchUser: function (req, res) {
    res.json(req.user)
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // update: async function (req, res) {
  //   const user = await db.User.findById(req.params.id)
  //   user.favorites.push(req.body._id)
  //   console.log(user)
  //   user.save()
  //     .then(data => res.json(data))
  //     .catch(err => console.log(err))
  // },
  remove: function (req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
