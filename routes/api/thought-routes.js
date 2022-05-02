
const router = require("express").Router();

const { 
    getAllThoughts, 
    createThought, 
    getSingleThought, 
    updateSingleThought, 
    removeThought, 
    addReaction, 
    removeReaction
 } = require("../../controllers/thought-controller");

// get all thoughts
router.route("/").get(getAllThoughts).post(createThought);

// get, update, and delete/remove thought
router.route("/:id").get(getSingleThought).put(updateSingleThought).delete(removeThought);

// create a reaction with the thought ID
router.route("/:thoughtId/reactions").post(addReaction);

// delete a reaction with the reaction ID
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;