const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        category: { type: String, required: true, unique: true },
        categorySlug: { type: String, required: true, unique: true },
    },
    {
        timestamps: true,
    }
);

const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);

module.exports = Category;