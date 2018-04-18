const router = require("express").Router();
const eventRoutes = require("./events");
const mountainsRoutes = require("./mountains");

// Book routes
router.use("/events", eventRoutes);
router.use("/mountains", mountainsRoutes);

module.exports = router;
