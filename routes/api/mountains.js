const router = require("express").Router();
const mountainsController = require("../../controllers/mountainsController");

// Matches with "/api/books"
router.route("/")
  .get(mountainsController.findAll)
  .post(mountainsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(mountainsController.findById)
  .put(mountainsController.update)
  .delete(mountainsController.remove);

module.exports = router;
