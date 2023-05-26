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
router.post('/', agregar)

async function todos (req,res,next) {
    try {
        const items = await controlador.todos();
        respuesta.success(req,res,items,200);
    } catch (error) {
      next(error);
    }
};

async function uno (req,res,next) {
    try {
        const items = await controlador.show(req.params.id);
        respuesta.success(req,res,items,200);       
    } catch (error) {
        next(error);
    }
};

async function eliminar (req,res,next) {
    try {
        const items = await controlador.eliminar(req.body);
        respuesta.success(req,res,'item eliminado satisfactoriamente',200);       
    } catch (error) {
        next(error);
    }
};

async function agregar (req,res,next) {
    try {
        const items = await controlador.agregar(req.body);
        if (req.body.id == 0)  {
            mensaje = "item guardado con exito";
        }else{
            mensaje = "item actualizado con exito";
        }
        respuesta.success(req,res,mensaje,201);       
    } catch (error) {
        next(error);
    }
};



module.exports = router;