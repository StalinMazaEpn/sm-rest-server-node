

const Role = require("../models/role");
const User = require("../models/role");

const roleIsValid = async (role = "") => {
    const existRole = await Role.findOne({ role });
    if (!existRole) { throw new Error(`Role ${role} is not defined in DB`) }
}

const userEmailAlreadyExist = async (email = "") => {
    const emailExists = await User.findOne({ email });
    if (emailExists) {
        throw new Error("Email is already register");
    }
}


module.exports = {
    roleIsValid,
    userEmailAlreadyExist
}