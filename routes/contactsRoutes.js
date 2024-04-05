const express = require("express");
const router = express.Router();

router.route("/").get((request, responce) => {
    responce.status(200).json({
        message: "Get all contacts"
    })
});

router.route("/:id").get((request, responce) => {
    responce.status(200).json({
        message: `Get the ${request.params.id} contact `
    })
});

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