const express = require("express")
const { registerUser, loginUser, currentUser } = require("../controllers/usersController")
const router = express.Router();
router.post("/userregistration", registerUser);
router.post("/userlogin", loginUser);
router.get("/currentuser", currentUser);

module.exports = router;