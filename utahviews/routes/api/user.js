const router = require("express").Router();
const authController = require("../../controllers/authController");
const passport = require('passport');
const { default: Axios } = require("axios");

// Matches with "/api/user/login"
router.route("/login")
  // .get(citiesController.findAll)
  .post(function (req, res, next) {
    console.log('routes/user.js, login, req.body: ');
    console.log(req.body)
    next()
},
passport.authenticate('local'), authController.login);

router.route('/')
  .post(authController.createUser)

// Matches with "/api/user/:id"
// router
//   .route("/:id")
//   .get(citiesController.findById)
//   .put(citiesController.update)
//   .delete(citiesController.remove);

module.exports = router;
