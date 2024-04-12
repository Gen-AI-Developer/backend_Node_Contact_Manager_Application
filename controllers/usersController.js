const asyncHandler = require("express-async-handler")


//@desc Register a User
//@route Post /api/user/register
//@access public

const registerUser = asyncHandler(
    async (request, response) => {
        response.json({ message: "Register the User" });
    }
);

module.exports = { registerUser }