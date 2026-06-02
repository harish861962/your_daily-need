const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3000;

// require("../config/userdetails")
require("../config/db");

app.use(cors());
app.use(express.json());


// ROUTES

const signupRoute = require("../Routes/signuproute");
const userdetailsroute = require("../Routes/userdetailsroute");

app.use("/userdetails", userdetailsroute);
app.use("/SignUp", signupRoute);

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});