const asyncHandler = require("express-async-handler")


//@desc Register a User
//@route Post /api/user/register
//@access public

const registerUser = asyncHandler(
    async (request, response) => {
        response.json({ message: "Register the User" });
    }
);

//@desc Login a User
//@route Post /api/user/login
//@access public

const loginUser = asyncHandler(
    async (request, response) => {
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