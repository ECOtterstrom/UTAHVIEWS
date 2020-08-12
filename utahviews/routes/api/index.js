const router = require("express").Router();
const trailRoutes = require("./trails");
const cityRoutes = require("./cities");

// Trail routes
router.use("/trails", trailRoutes);
router.use("/cities", cityRoutes);

module.exports = router;
