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
        const contact = await Contacts.findById(request.params.id)
        if (!contact) {
            responce.status(404);
            throw new Error("Contact not Found")
        }
        responce.status(200).json(contact)
    }
);
//@desc Update  contact
//@route Update /api/contacts/:id
//@access public

const updateContact = asyncHandler(
    async (request, responce) => {
        const contact = await Contacts
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
        const contact = await Contacts.create({
            name, email, phone
        })
        responce.status(201).json(contact)
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