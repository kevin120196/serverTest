const mysql = require('mysql');
const config = require('../config');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

let conexion;

function conmysql(){
    conexion = mysql.createConnection(dbconfig);

    conexion.connect((err)=>{
        if(err){
            console.log(['db err'], err);
            setTimeout(conmysql,200)
        }else{
            console.log('DB conectada !!!');
        }
    });

    conexion.on('error',err => {
        console.log('[db err]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST'){
            conmysql();
        }else{
            throw err;
        }
    });
}

conmysql();

function index(tabla){
    return new Promise((resolve,reject)=>{
        conexion.query(`SELECT * FROM ${tabla}`,(err,result)=>{
            if (err) return reject (err)
            resolve(result); 
            console.log(result)
        })
    })
}

function show(tabla, id){

}

function create(tabla, datos){


}

function borrar(tabla, id){

}

module.exports = {
    index,show,create,borrar
}