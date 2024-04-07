const asyncHandler = require("express-async-handler")
const Contacts = require("../models/contactModels")

//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(
    async (request, responce) => {
        const contacts = await Contacts.find();
        responce.status(200).json(contacts)
    }
);

//@desc Get  contact
//@route GET /api/contacts
//@access public

const getContact = asyncHandler(
    async (request, responce) => {
        responce.status(200).json({
            message: `this is contact @ ${request.params.id}`,
        })
    }
);
//@desc Update  contact
//@route Update /api/contacts/:id
//@access public

const updateContact = asyncHandler(
    async (request, responce) => {
        responce.status(200).json({
            message: `this contact is updated @ ${request.params.id}`,
        })
    }
);
//@desc Create New Contacts
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(
    async (request, responce) => {
        console.log("This is request:", request.body);
        const { name, email, phone } = request.body;
        if (!name || !email || !phone) {
            responce.status(400);
            throw new Error('All fields are mandatory')
        }

        responce.status(201).json({
            message: "Create contact"
        })
    }
);
//@desc Delete  contact
//@route delete /api/contacts/:id
//@access public

const deleteContact = asyncHandler(
    async (request, responce) => {
        responce.status(200).json({
            message: `this is contact is Deleted @ ${request.params.id}`,
        })
    }
);
module.exports = { getContacts, createContact, getContact, deleteContact, updateContact }