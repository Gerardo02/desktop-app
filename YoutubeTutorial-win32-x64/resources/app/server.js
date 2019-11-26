/*
// sql connection
const mysql = require('mysql');
const express = require('express');
const app = express();

// Create connection
connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '767482',
    database: 'inventario_ganadero'
});
// connect
connection.connect((err) => {
    if(err){
      throw err;
    } 
    console.log('Connected');
});

app.listen('1450', () => {
    console.log('inicializa servidor en puerto 1450');
});


const texto = document.getElementById('prueba');

app.get('/', function(req, resp){
  connection.query('SELECT * FROM ganado', function(err, rows, fields) {
    if (err){
      console.log('error2');
    }else{
      console.log('succes');
      //console.log(`El tipo es:${rows[0].tipo}`);
    };
    const type1 = rows[0].tipo;
    console.log(type1);
  });
})

texto.innerText = type1;

*/
// command
const execSync = require('child_process').execSync;
// import { execSync } from 'child_process';  // replace ^ if using ES modules
const output = execSync('start firefox localhost:1450/cagada', { encoding: 'utf-8' });  // the default is 'buffer'
console.log('Output was:\n', output);