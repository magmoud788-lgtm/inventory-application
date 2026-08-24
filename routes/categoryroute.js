const { Router } = require('express');

const categoryRouter = Router();

const categoryController = require('../controllers/categoriesController');

categoryRouter.get('/categories', categoryController.getAllCategories);

categoryRouter.get('/categories/:id', categoryController.getCategory);

categoryRouter.post('/categories/new', categoryController.createCategory);

categoryRouter.delete('/categories/:id', categoryController.deleteCategory);

module.exports = categoryRouter;