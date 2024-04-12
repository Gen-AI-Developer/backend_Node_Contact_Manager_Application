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

module.exports = { registerUser, loginUser }