const db = require("../models");
const Axios = require('axios');
// Defining methods for the trailsController
module.exports = {
  get: async function(req, res) {
    let { lat, lon, miles } = req.body;
    if(!miles) {
      miles = "30";
    }
    if(!lat) {
      lat = "40.027"
    }
    if(!lon) {
      lon = "-105.251"
    }
    const { data } = await Axios.get(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=${miles}&key=200857114-bb6b66798e5094dcd9c231249bb926ba`)
    res.json(data);
  },
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
