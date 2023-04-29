const express = require('express');
const router = express.Router();
const respuesta = require('../../red/respuesta');
const controlador = require('./controlador')
router.get('/',function (req,res) {

    const todos = controlador.todos()
    .then((item)=>{
        respuesta.success(req,res,item,200)
    })
});

module.exports = router;