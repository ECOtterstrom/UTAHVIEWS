const db = require("../models");
const Axios = require('axios');

// Defining methods for the trailsController
module.exports = {
  get: async function(req, res) {
    let { latitude, longitude } = req.query;
    if(!latitude) {
      latitude = "40.027"
    }
    if(!longitude) {
      longitude = "-105.251"
    }

    try {
      const { data } = await Axios.get(`https://www.hikingproject.com/data/get-trails?lat=${latitude}&lon=${longitude}&maxDistance=25&key=200857114-bb6b66798e5094dcd9c231249bb926ba`)
      res.json(data);
    } catch(err) {
      console.log(err);
    }
  },
  // get: function(req, res) {
  //   db.Trail
  //     .find(req.query)
  //     // .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  findAll: function(req, res) {
    db.Trail
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Trail
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Trail
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Trail
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Trail
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
