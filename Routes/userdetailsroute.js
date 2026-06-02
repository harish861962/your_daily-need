const express = require("express");
const router = express.Router();

const User = require("../schema/userdetails");


// GET ALL USERS
router.get("userdetails/", async (req, res) => {

    const users = await User.find();

    res.json(users);
});


// ADD USER
router.post("userdetails/", async (req, res) => {

    const newUser = new User(req.body);

    await newUser.save();

    res.json({
        message: "User Added"
    });
});


// DELETE USER
router.delete("userdetails/delete/:id", async (req, res) => {

    await User.findByIdAndDelete(req.params.id);

    res.json({
        message: "User Deleted"
    });
});


// UPDATE USER
router.patch("userdetails/edituser/:id", async (req, res) => {

    const updatedUser = await User.findByIdAndUpdate(
        req.params.id);

    res.json(updatedUser);
});

module.exports = router;