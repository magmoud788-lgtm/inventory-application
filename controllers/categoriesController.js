const db = require('../db/queries.js');

async function getAllCategories(req, res) {

    const categories = await db.getAllCategories();

    res.render('categories', {
        categories
    });
}

async function getCategory(req, res) {

    const { id } = req.params;

    const category = await db.getCategory(id);
    const items = await db.getItemBycategory(id);

    res.render('category', {
        id,
        category,
        items
    });
}

async function createCategory(req, res) {

    const { name, description } = req.body;

    await db.createCategory(name, description);

    res.redirect('/categories');
}

async function deleteCategory(req, res) {

    const { id } = req.params;

    await db.deleteCategory(id);

    res.redirect('/categories');
}

module.exports = {
    getAllCategories,
    getCategory,
    createCategory,
    deleteCategory
};