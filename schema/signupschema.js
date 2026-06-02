const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
    email: String,
    password: String,
    phone: String,
    name: String,
    address:String
})

module.exports = mongoose.model("SignUpUser", signupSchema)