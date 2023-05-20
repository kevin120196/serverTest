const express = require('express');
const router = express.Router();
const respuesta = require('../../red/respuesta');
const controlador = require('./controlador')
/*router.get('/',function (req,res) {
    const todos = controlador.todos()
    .then((item)=>{
        respuesta.success(req,res,item,200)
    })
});*/

router.get('/', todos);
router.get('/:id', uno);
router.put('/', eliminar);

async function todos (req,res) {
    try {
        const items = await controlador.todos();
        respuesta.success(req,res,items,200);
    } catch (error) {
        respuesta.error(req,res,err,500);
    }
};

async function uno (req,res) {
    try {
        const items = await controlador.show(req.params.id);
        respuesta.success(req,res,items,200);       
    } catch (error) {
        respuesta.error(req,res,error,500);
    }
};

async function eliminar (req,res) {
    try {
        const items = await controlador.eliminar(req.body);
        respuesta.success(req,res,'item eliminado satisfactoriamente',200);       
    } catch (error) {
        respuesta.error(req,res,error,500);
    }
};



module.exports = router;