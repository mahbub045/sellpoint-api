const UserService = require("../services/user.service");

exports.createUser = async (req, res) => {
    const user = req.body;
    const result = await UserService.createUserService(user);
    res.status(200).json({ status: "Seccess", message: "Seccessfully Create User", result: result });
}

exports.getUser = async (req, res) => {
    const user = await UserService.getUserService();
    res.status(200).json(user);
}