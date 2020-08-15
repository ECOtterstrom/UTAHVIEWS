const router = require("express").Router();
const db = require("../models");

router.get("/trails", (req, res) => {
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
  db.Trail.find({
    name: { $regex: new RegExp(req.query.q, 'i')}
  })
    .then(trails => res.json(trails))
    .catch(err => res.status(422).end());
});

router.get("/favorites", (req, res) => {
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
  db.Favorite.find({
    name: { $regex: new RegExp(req.query.q, 'i')}
  })
    .then(favorites => res.json(favorites))
    .catch(err => res.status(422).end());
});

module.exports = router;
