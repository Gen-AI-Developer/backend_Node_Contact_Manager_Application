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
        const contact = await Contacts.findById(request.params.id)
        if (!contact) {
            responce.status(404);
            throw new Error("Contact not Found")
        }
        const updatedcontact = await Contacts.findByIdAndUpdate(
            request.params.id,
            request.body,
            { new: true }
        );
        responce.status(200).json(updatedcontact)
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

// const deleteContact = asyncHandler(
//     async (request, response) => {
//         const contact = await Contacts.findById(request.params.id);
//         if (!contact) {
//             response.status(404);
//             throw new Error("Contact not Found")
//         }

//         await Contacts.remove();
//         response.status(200).json(contact)
//     }
// );
const deleteContact = asyncHandler(async (request, response) => {
    const contact = await Contacts.findAndDelete({ id: request.params.id })
    if (!contact) {
        response.status(404);
        console.log(contact)
        console.log(Contacts)
        throw new Error("Contact not Found")
    }

    await contact.remove();
    console.log(request.params.id)
    response.status(200).json(contact);
}
);


// const deleteContact = asyncHandler(
//     async (request, response) => {
//         const contact = await Contacts.findById(request.params.id);
//         if (!contact) {
//             response.status(404);
//             throw new Error("Contact not found");
//         } else {
//             await Contacts.remove(); // Remove the specific contact
//             response.status(200).json({ message: "Contact removed successfully" });
//         }
//     }
// );

module.exports = { getContacts, createContact, getContact, deleteContact, updateContact }