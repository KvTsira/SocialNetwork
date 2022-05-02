const router = require("express").Router();

const {
  getAllThoughts,
  createThought,
//   getSingleThought,
  getThoughtByID,
  updateThoughtByID,
  removeThoughtByID,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// get all thoughts
router.route("/").get(getAllThoughts).post(createThought);

// get, update, and delete/remove thought
router
  .route("/:id")
//   .get(getSingleThought)
  .get(getThoughtByID)
  .put(updateThoughtByID)
  .delete(removeThoughtByID);

// create a reaction with the thought ID
router.route("/:thoughtId/reactions").post(addReaction);

// delete a reaction with the reaction ID
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
