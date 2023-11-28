const BrandService = require("../services/brand.service");

exports.createBrand = async (req, res) => {
    const brand = req.body;
    const result = await BrandService.createBrandService(brand);
    res.status(200).json({ status: "Seccess", message: "Seccessfully Create Brand", result: result });
}

exports.getBrand = async (req, res) => {
    const brand = await BrandService.getBrandService();
    res.status(200).json(brand);
}