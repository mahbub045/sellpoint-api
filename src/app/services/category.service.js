const Category = require("../models/Category");

const getCategoryService = async () => {
    const category = await Category.find({});
    return category;
}
const saveCategoryService = async (category) => {
    const result = await Category.create(category);
    return result;
}
const categoryByCategoryName = async (category) => {
    const result = await Category.findOne({ category: category });
    return result;

}
module.exports = { getCategoryService, saveCategoryService, categoryByCategoryName };