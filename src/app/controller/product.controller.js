const { categoryByCategoryName, getCategoryService } = require("../services/category.service");
const ProductsService = require("../services/product.service");


exports.getProducts = async (req, res) => {
    const product = req.query.name;
    let products;
    if (product) {
        products = await ProductsService.getFilterData(product);
    } else {
        products = await ProductsService.getProductsService();
    }
    const categoryDetails = await getCategoryService();
    const result = categoryDetails?.map(category => {
        const categoryProducts = products?.filter(product => product.category === category.category);
        return {
            category: category.category,
            categorySlug: category.categorySlug,
            products: categoryProducts
        };
    });
    res.status(200).json(result);
    // res.status(200).json({ status: "Seccess", message: "Seccessfully Get Products", product: result });
}
exports.createProducts = async (req, res) => {
    const product = req.body;
    const result = await ProductsService.saveProductsService(product);
    res.status(200).json({ status: "Seccess", message: "Seccessfully Create Products", result: result });
}

exports.getProductByCategory = async (req, res) => {
    const { categoryName } = req.params;
    const categoryDetails = await categoryByCategoryName(categoryName);
    const products = await ProductsService.getProductByCategory(categoryName);
    const { category, categorySlug } = categoryDetails;
    const payload = [{ category: category, categorySlug: categorySlug, products: products }];
    // res.status(200).json({ status: "Seccess", message: "Seccessfully Create Products", result: payload });
    res.status(200).json(payload);
}

exports.getSearchData = async (req, res) => {
    const allProduct = await ProductsService.getProductsService();
    const productName = allProduct.map(product => ({ name: product.name }));
    res.status(200).json(productName);
}
