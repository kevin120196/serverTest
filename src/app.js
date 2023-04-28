const express = require('express')
const config = require('./config')
const app = express();
const clientes = require('./modulos/clientes/rutas');


app.set('port', config.app.port);

//rutas

app.use('/api/clientes',clientes)

module.exports = app;