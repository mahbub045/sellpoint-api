const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema(
    {
        brand: { type: String, required: true, unique: true },
        brandSlug: { type: String, required: true, unique: true }
    },
    {
        timestamps: true
    }
);
const Brand = mongoose.model.Brand || mongoose.model('Brand', brandSchema);
module.exports = Brand;