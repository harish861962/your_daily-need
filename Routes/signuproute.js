const express = require("express");
const router = express.Router();

const SignUpUser = require("../schema/signupschema");

router.get("/", async (req,res)=>{
    const allusers = await SignUpUser.find();

    res.json(allusers)
})


// post 

router.post("/", async (req, res) => {

    const newUser = new SignUpUser(req.body);

    await newUser.save();

    res.json({
        message: "User Added Successfully"
    });
});


// Delete

router.delete("/:id", async (req, res) => {

    await SignUpUser.findByIdAndDelete(req.params.id);

    res.json({
        message: "User Deleted"
    });
});


// edit 

router.patch("signupuser/edituser/:id", async(req,res)=>{
 
    const updatedUser = await User.findByIdAndUpdate(
            req.params.id);

    res.json(updatedUser)
})

module.exports = router;