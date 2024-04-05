//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = (request, responce) => {
    responce.status(200).json({
        message: "Get all contacts"
    })
};
//@desc Create New Contacts
//@route POST /api/contacts
//@access public

const createContacts = (request, responce) => {
    responce.status(201).json({
        message: "Create contact"
    })
}
module.exports = { getContacts, createContacts }