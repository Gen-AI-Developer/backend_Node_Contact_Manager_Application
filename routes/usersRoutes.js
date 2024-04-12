const express = require("express")

const router = express.Router();
const { registerUser, loginUser } = require("../controllers/usersController")
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", (request, response) => {
    response.json({ message: "Current User" })
});

module.exports = router;