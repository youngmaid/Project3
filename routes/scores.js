const express = require('express');
const controller = require('../controllers/scoresController');
const scoresRouter = express.Router();

scoresRouter.get('/:id/edit', controller.getOne);

scoresRouter.route('/:id')
.get(controller.getOne)
.put(controller.update)
.delete(controller.destroy);

scoresRouter.route('/')
.get(controller.index)
.post(controller.create);

scoresRouter.route('/test')
.post(controller.getApi)

module.exports = scoresRouter;
