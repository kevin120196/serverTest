const db = require('../../DB/mysql');

const TABLA = 'clientes';

function todos(){
    return db.index(TABLA);
}

module.exports = {
    todos
}