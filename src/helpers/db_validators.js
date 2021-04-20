

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

const userExistById = async (id) => {
    const userExists = await User.findById(id);
    if (!userExists) {
        throw new Error(`ID ${id} not found`);
    }
}


module.exports = {
    roleIsValid,
    userEmailAlreadyExist,
    userExistById
}