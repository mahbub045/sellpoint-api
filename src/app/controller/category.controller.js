//category
const CategoryService = require("../services/category.service");
exports.createCategory = async (req, res) => {
    const category = req.body;
    const result = await CategoryService.saveCategoryService(category);
    res.status(200).json({ status: "Seccess", message: "Seccessfully Create Category", result: result });
}
exports.getCategory = async (req, res) => {
    const category = await CategoryService.getCategoryService();
    res.status(200).json(category);
    // res.status(200).json({ status: "Seccess", message: "Seccessfully Get Category", category: category });
}