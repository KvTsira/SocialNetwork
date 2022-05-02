
const router = require("express").Router();

const { 
    getAllUsers, 
    createUser, 
    getUserByID, 
    updateUserByID, 
    removeUserByID, 
    addFriend, 
    removeFriend 
} = require("../../controllers/user-controller");

// set up GET all users 
router.route("/").get(getAllUsers).post(createUser);

// Get, update, and delete a singe user 
router.route("/:id").get(getUserByID).put(updateUserByID).delete(removeUserByID);

// add and remove friends
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;