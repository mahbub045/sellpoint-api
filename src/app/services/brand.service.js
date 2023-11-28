const Brand = require("../models/Brand");

const createBrandService = async (brand) => {
    const result = await Brand.create(brand);
    return result;
}

const getBrandService = async () => {
    const brand = await Brand.find({});
    return brand;
}

module.exports = { createBrandService, getBrandService };