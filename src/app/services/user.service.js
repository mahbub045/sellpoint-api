const Brand = require("../models/Brand");
const User = require("../models/User");

const createUserService = async (user) => {
    const result = await User.create(user);
    return result;
}

const getUserService = async () => {
    const user = await User.find({})
    return user;
}
module.exports = { createUserService, getUserService };