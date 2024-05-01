const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


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
        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        //console.log("Hashed Password: ", hashedPassword)
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
        });
        console.log(`User created ${user}`);
        if (user) {
            response.status(201).json({ _id: user.id, email: user.email })
        }
        else {
            response.status(400);
            throw new Error("User data is not validd")
        }
        response.json({ message: "Register the User" });
    }
);

//@desc Login a User
//@route Post /api/user/login
//@access public

const loginUser = asyncHandler(
    async (request, response) => {
        const { email, password } = request.body;
        response.json({ message: " Login for the User" });
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