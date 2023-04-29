const db = require('../../DB/mysql');

const TABLA = 'visitas_taller';

function todos(){
    return db.index(TABLA);
}

module.exports = {
    todos
}