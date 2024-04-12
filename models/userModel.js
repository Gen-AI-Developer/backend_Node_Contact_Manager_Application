const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true, "please add the username"]
    },
    email: {
        type: String,
        required: [true, "please add the User Email Address"],
        unique: [true, "Email address already taken"]
    },
    password: {
        type: String,
        required: [true, "please add the User Password"]
    }
}, {
    timestamps: true
});
module.exports = mongoose.model("User", userSchema);