const router = require("express").Router();
const trailsController = require("../../controllers/trailsController");

// Matches with "/api/trails"
router.route("/")
  .get(trailsController.get)
  .post(trailsController.create);

// Matches with "/api/trails/:id"
router
  .route("/:id")
  .get(trailsController.findById)
  .put(trailsController.update)
  .delete(trailsController.remove);

router.route('/favorite')
  .get(trailsController.populateTrails)

module.exports = router;
