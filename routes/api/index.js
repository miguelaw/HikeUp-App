const router = require("express").Router();
const dbRoutes = require("./dbRoutes");

// AWS routes
router.use("/db", dbRoutes);

module.exports = router;
