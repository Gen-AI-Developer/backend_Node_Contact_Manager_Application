const express = require("express")

const router = express.Router();
const { registerUser } = require("../controllers/usersController")
router.post("/register", registerUser);
router.post("/login", (request, response) => {
    response.json({ message: "Login the User" })
});
router.get("/current", (request, response) => {
    response.json({ message: "Current User" })
});

module.exports = router;