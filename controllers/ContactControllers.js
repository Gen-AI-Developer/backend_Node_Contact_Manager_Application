//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = (request, responce) => {
    responce.status(200).json({
        message: "Get all contacts"
    })
};

//@desc Get  contact
//@route GET /api/contacts
//@access public

const getContact = (request, responce) => {
    responce.status(200).json({
        message: `this is contact @ ${request.params.id}`,
    })
};
//@desc Update  contact
//@route Update /api/contacts/:id
//@access public

const updateContact = (request, responce) => {
    responce.status(200).json({
        message: `this contact is updated @ ${request.params.id}`,
    })
};
//@desc Create New Contacts
//@route POST /api/contacts
//@access public

const createContact = (request, responce) => {
    console.log("This is request:", request.body)
    responce.status(201).json({
        message: "Create contact"
    })
}
//@desc Delete  contact
//@route delete /api/contacts/:id
//@access public

const deleteContact = (request, responce) => {
    responce.status(200).json({
        message: `this is contact is Deleted @ ${request.params.id}`,
    })
};
module.exports = { getContacts, createContact, getContact, deleteContact, updateContact }