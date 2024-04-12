const express = require("express")
const router = express.Router();
router.post("/register", (request, response) => {
    response.json({ message: "Register the User" })
});
router.post("/login", (request, response) => {
    response.json({ message: "Login the User" })
});
router.post("/current", (request, response) => {
    response.json({ message: "Current User" })
});

module.exports = router;