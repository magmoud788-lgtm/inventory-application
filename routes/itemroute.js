const { Router } = require('express');

const itemRouter = Router();

const itemController = require('../controllers/itemscontroller');

itemRouter.post('/items/new', itemController.createItem);

itemRouter.delete('/items/:id', itemController.deleteItem);

module.exports = itemRouter;