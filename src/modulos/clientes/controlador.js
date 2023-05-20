const db = require('../../DB/mysql');

const TABLA = 'visitas_taller';

function todos(){
    return db.index(TABLA);
}

function show(id){
    return db.show(TABLA,id);
}

function eliminar(body){
    return db.borrar(TABLA,body);
}

module.exports = {
    todos,show,eliminar
}