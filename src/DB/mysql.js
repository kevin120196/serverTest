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
            return err ? reject (err) : resolve(result);
            console.log(result)
        })
    })
}

function show(tabla, id){
    return new Promise((resolve,reject)=>{
        conexion.query(`SELECT * FROM ${tabla} WHERE id = ${id}`,(err,result)=>{
            return err ? reject (err) : resolve(result);
            console.log(result)
        })
    })
}

function create(tabla, datos){


}

function borrar(tabla, data){
    return new Promise((resolve,reject)=>{
        conexion.query(`DELETE FROM ${tabla} WHERE id = ?`,data.id,(err,result)=>{
            return err ? reject (err) : resolve(result); 
            console.log(result)
        })
    })
}

module.exports = {
    index,show,create,borrar
}