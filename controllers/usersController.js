const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt")


//@desc Register a User
//@route Post /api/user/register
//@access public

const registerUser = asyncHandler(
    async (request, response) => {
        const { username, email, password } = request.body;
        if (!username || !email || !password) {
            response.status(400);
            throw new Error("All fields are mandatory!")
        }
        const userAvailable = await User.findOne({ email });
        if (userAvailable) {
            response.status(400);
            throw new Error("User Already Registered!")
        }
        response.json({ message: "Register the User" });
    }
);

//@desc Login a User
//@route Post /api/user/login
//@access public

const loginUser = asyncHandler(
    async (request, response) => {
        response.json({ "message": " Login for the User" });
    }
);

//@desc Current User information
//@route Get /api/user/current
//@access private

const currentUser = asyncHandler(
    async (request, response) => {
        response.json({ message: " current User information" });
    }
);
module.exports = { registerUser, loginUser, currentUser }