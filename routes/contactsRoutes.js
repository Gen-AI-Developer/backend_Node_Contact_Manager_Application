const express = require("express");
const router = express.Router();
const { getContacts, createContacts } = require('../controllers/ContactControllers')

router.route("/").get(getContacts);

router.route("/:id").get(createContacts);

router.route("/").post((request, responce) => {
    responce.status(200).json({
        message: "Create a Contact"
    })
});

router.route("/:id").put((request, responce) => {
    responce.status(200).json({
        message: `Update the contact ${request.params.id}`
    })
});

router.route("/:id").delete((request, responce) => {
    responce.status(200).json({
        message: `Delete the contact ${request.params.id}`
    })
});

module.exports = router;