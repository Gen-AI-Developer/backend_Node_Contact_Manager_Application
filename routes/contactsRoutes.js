const express = require("express");
const router = express.Router();
const { getContacts, createContact, getContact, updateContact, deleteContact } = require('../controllers/ContactControllers')

router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact);
router.route("/:id").delete(deleteContact);
module.exports = router;