const router = require("express").Router();
const trailRoutes = require("./trails");
const cityRoutes = require("./cities");
const userRoutes = require("./user");

// Trail routes
router.use("/trails", trailRoutes);
router.use("/cities", cityRoutes);
router.use("/auth", userRoutes);

module.exports = router;
