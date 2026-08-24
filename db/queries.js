const pool = require('./pool.js');

async function getAllItems() {
  const { rows } = await pool.query(`SELECT * FROM items`);
  return rows;
}

async function getItem(id) {
  const { rows } = await pool.query(`SELECT * FROM items WHERE id = $1`, 
    [id]);
    return rows[0];
}

async function createItem(name, description, price, quantity, categoryId) {
  const { rows } = await pool.query('INSERT INTO items (name, description, price, quantity, category_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [name, description, price, quantity, categoryId]
  );
return rows[0]
};

async function deleteItem(id) {
  const { rows } = await pool.query('DELETE FROM items WHERE id = $1', [id]);
  return rows[0];
};

async function getAllCategories() {
  const { rows } = await pool.query('SELECT * FROM categories');
  return rows;
}

async function getCategory(id) {
  const { rows } = await pool.query('SELECT * FROM categories WHERE id = $1', [id]);
  return rows[0];
};

async function createCategory(name, description) {
  const { rows } = await pool.query('INSERT INTO categories (name, description) VALUES ($1, $2) RETURNING *', [name, description]);
  return rows[0];
}

async function deleteCategory(id) {
  const { rows } = await pool.query('DELETE FROM categories WHERE id = $1 RETURNING *', [id]);
  return rows[0];
}

async function getItemBycategory(categoryId) {
  const { rows } = await pool.query('SELECT * FROM items WHERE category_id = $1', [categoryId])
  return rows;
}

module.exports = {
    getAllItems,
    getItem,
    createItem,
    deleteItem,
    getAllCategories,
    getCategory,
    createCategory,
    deleteCategory,
    getItemBycategory
};