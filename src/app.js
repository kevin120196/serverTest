const express = require('express')
const config = require('./config')
const app = express();
const clientes = require('./modulos/clientes/rutas');
const morgan = require("morgan");
//Middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//configuracion
app.set('port', config.app.port);

//rutas

app.use('/api/clientes',clientes)

module.exports = app;