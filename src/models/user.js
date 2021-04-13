/**
 {
     firstname:"",
     email: "",
     password: "asad",
     img: "",
     role: "",
     state: true,
     google: false
 }
 */
const { Schema, model } = require("mongoose");

//Create Schema inherit to the Model
const UserSchema = Schema({
    firstname: {
        type: String,
        required: [true, "Firstname is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: 'Email ({VALUE}) is already registered'
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        required: [true, "Role is required"],
        emun: ["ADMIN_ROLE", "USER_ROLE"]
    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
});

UserSchema.methods.toJSON = function () {
    const { __v, password, ...user } = this.toObject();
    return user;
}

UserSchema.plugin(require('mongoose-beautiful-unique-validation'));

module.exports = model("User", UserSchema)