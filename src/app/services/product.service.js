const Product = require("../models/Products");

const getProductsService = async () => {
    const product = await Product.find({});
    return product;
}
const saveProductsService = async (product) => {
    const result = await Product.create(product);
    return result;
}
const getProductByCategory = async (category) => {
    const result = await Product.find({ category: category });
    return result;

}
const getFilterData = async (productName) => {
    const result = await Product.find({ name: { $regex: productName, $options: "i" } }).exec();
    return result;
}
module.exports = { getProductsService, saveProductsService, getProductByCategory, getFilterData };