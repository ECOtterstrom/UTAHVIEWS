const router = require("express").Router();
const trailRoutes = require("./trails");
const cityRoutes = require("./cities");
const userRoutes = require("./user");
const favoriteRoutes = require("./favorites");

// Trail routes
router.use("/trails", trailRoutes);
router.use("/cities", cityRoutes);
router.use("/auth", userRoutes);
router.use("/favorites", favoriteRoutes);

module.exports = router;
