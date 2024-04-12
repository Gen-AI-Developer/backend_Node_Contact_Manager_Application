//@desc Register a User
//@route Post /api/user/register
//@access public

const regiesterUser = asyncHandler(
    async (request, responce) => {
        const user = await Contacts.find();
        responce.status(200).json(contacts)
    }
);