const router = require("express").Router();
const authController = require("../../controllers/authController");
const passport = require('../../passport');
const { default: Axios } = require("axios");

// Matches with "/api/auth/login"
router.route("/login")
  // .get(citiesController.findAll)
  .post(passport.authenticate('local'), (req, res) => res.json(req.user))

router.route('/')
  .get(authController.fetchUser)
  .post(authController.createUser)

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(authController.populateFavorites)
  // .put(authController.update)
  .delete(authController.remove);

module.exports = router;
