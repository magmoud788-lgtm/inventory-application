const db = require('../db/queries.js');

async function getAllItems(req, res) {

    const items = await db.getAllItems();

    res.render('items', {
        items
    });
}

async function getItem(req, res) {

    const { id } = req.params;

    const item = await db.getItem(id);

    res.render('items', {
        id,
        item
    });
}

async function createItem(req, res) {

    const { name, description, price, quantity, categoryId } = req.body;
    
    await db.createItem(name, description, price, quantity, categoryId);

    res.redirect(`/categories/${categoryId}`);
}

async function deleteItem(req, res) {

    const { id } = req.params;
    const { categoryId } = req.body;
    await db.deleteItem(id);

    res.redirect(`/categories/${categoryId}`);
}

module.exports = {
    getAllItems,
    getItem,
    createItem,
    deleteItem
};