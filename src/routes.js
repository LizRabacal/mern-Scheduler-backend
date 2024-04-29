const express = require('express');
const routes = express.Router();

const EventController = require('./Controllers/EventController')


//rota evento
routes.post('/event', EventController.create);
routes.get('/event', EventController.read);
routes.delete('/event/:id', EventController.delete)
routes.put('/event/:id', EventController.update)

module.exports = routes;

