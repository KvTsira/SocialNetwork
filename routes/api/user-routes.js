
const router = require("express").Router();

const { 
    getAllUsers, 
    createUser, 
    getSingleUser, 
    updateSingleUser, 
    removeUser, 
    addFriend, 
    removeFriend 
} = require("../../controllers/user-controller");

// set up GET all users 
router.route("/").get(getAllUsers).post(createUser);

// Get, update, and delete a singe user 
router.route("/:id").get(getSingleUser).put(updateSingleUser).delete(removeUser);

// add and remove friends
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;