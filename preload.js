const execSync = require('child_process').execSync;
/*

const mysql = require('mysql');
const express = require('express');
const app1 = express();
let datos;

// Create connection
connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '633d5ca8e4',
    database: 'inventario_ganadero',
    
});

// connect
connection.connect((err) => {
    if(err){
      throw err;
    } 
    console.log('Connected');
});

app1.listen('1450', () => {
    console.log('inicializa servidor en puerto 1450');
});


// command
if(process.platform !== 'darwin'){
  const outputDatos = execSync('start firefox localhost:1450/datos', { encoding: 'utf-8' }); 
  console.log('Output datos was:\n', outputDatos);
  app1.get('/datos', (req, resp) => {
    connection.query('SELECT * FROM datos', (err, rows, fields) => {
      if (err){
        throw err;
      }else{
        console.log('succes datos');
        //console.log(`El tipo es:${rows[0].tipo}`);
      };
      resp.send('Conectado a la table datos');
      datos = rows;
      console.log(datos);
    });

  })
  
}else if(process.platform === 'darwin'){
  const outputDatos = execSync('open http://localhost:1450/datos', { encoding: 'utf-8' }); 
  console.log('Output datos was:\n', outputDatos);
  app1.get('/datos', (req, resp) => {
    connection.query('SELECT * FROM datos', (err, rows, fields) => {
      if (err){
        throw err;
        console.log('succes datos');
      }
      else{
        console.log('succes datos');
        //console.log(`El tipo es:${rows[0].tipo}`);
      };
      resp.send('Conectado a la table datos');
      datos = rows;
      console.log(datos);
    });

  })
}

*/
if(process.platform !== 'darwin'){
  const outputDatos = execSync('start firefox localhost:1450/datos', { encoding: 'utf-8' }); 
  console.log('Output datos was:\n', outputDatos);
  
}else if(process.platform === 'darwin'){
  const outputDatos = execSync('open chrome localhost:1450/datos', { encoding: 'utf-8' }); 
  console.log('Output datos was:\n', outputDatos);
}
