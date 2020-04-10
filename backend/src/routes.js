const express = require('express');

const OngControler = require('./controlers/OngControler');
const IncidentControler = require('./controlers/IncidentControler');
const ProfileControler = require('./controlers/ProfileControler');
const SessionControler = require('./controlers/SessionControler');

const routes = express.Router();

routes.post('/sessions', SessionControler.create);

routes.get('/ongs', OngControler.index);
routes.post('/ongs', OngControler.create);

routes.get('/profile', ProfileControler.index);

routes.get('/incidents', IncidentControler.index);
routes.post('/incidents', IncidentControler.create);
routes.delete('/incidents/:id', IncidentControler.delete);

module.exports = routes;