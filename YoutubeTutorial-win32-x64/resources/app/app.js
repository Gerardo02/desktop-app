const path = require('path')
const {app, BrowserWindow, Menu} = require('electron')

const execSync = require('child_process').execSync;
// sql connection
const mysql = require('mysql');
const express = require('express');
const app1 = express();

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

app1.listen('1450', () => {
    console.log('inicializa servidor en puerto 1450');
});


// command
if(process.versions !== 'darwin'){
  const outputGan = execSync('start firefox localhost:1450/ganado', { encoding: 'utf-8' }); 
  console.log('Output ganado was:\n', outputGan);
  app1.get('/ganado', (req, resp) => {
    connection.query('SELECT * FROM ganado', (err, rows, fields) => {
      if (err){
        throw err;
      }else{
        console.log('succes ganado');
        //console.log(`El tipo es:${rows[0].tipo}`);
      };
      resp.send('Conectado a la base de datos ganado');
      const ganado = rows;
      console.log(ganado);
    });

  })
  const outputEmp = execSync('start firefox localhost:1450/empresas', { encoding: 'utf-8' });
  console.log('Output empresas was:\n', outputEmp);
  app1.get('/empresas', (req, resp) => {
    connection.query('SELECT * FROM empresas', (err, rows, fields) => {
      if (err){
        throw err;
      }else{
        console.log('succes empresas');

      };
      const empresas = rows;
      console.log(empresas);
      resp.send('Conectado a la base de datos empresas');
    });

  })
  const outputDates = execSync('start firefox localhost:1450/fechas', { encoding: 'utf-8' });
  console.log('Output fechas was:\n', outputDates);
  app1.get('/fechas', (req, resp) => {
    connection.query('SELECT * FROM fechas', (err, rows, fields) => {
      if (err){
        throw err;
      }else{
        console.log('succes fechas');

      };
      const fechas = rows;
      console.log(fechas);
      resp.send('Conectado a la base de datos fechas');
    });

  })
  const outputPesos = execSync('start firefox localhost:1450/pesos', { encoding: 'utf-8' });
  console.log('Output pesos was:\n', outputPesos);
  app1.get('/pesos', (req, resp) => {
    connection.query('SELECT * FROM pesos', (err, rows, fields) => {
      if (err){
        throw err;
      }else{
        console.log('succes pesos');

      };
      const pesos = rows;
      console.log(pesos);
      resp.send('Conectado a la base de datos pesos');
    });

  })
  const outputVida = execSync('start firefox localhost:1450/vida', { encoding: 'utf-8' });
  console.log('Output vida was:\n', outputVida);
  app1.get('/vida', (req, resp) => {
    connection.query('SELECT * FROM vida', (err, rows, fields) => {
      if (err){
        throw err;
      }else{
        console.log('succes vida');

      };
      const vida = rows;
      console.log(vida);
      resp.send('Conectado a la base de datos vida');
    });
  })
}else if(process.versions === 'darwin'){
  const outputGan = execSync('open chrome localhost:1450/ganado', { encoding: 'utf-8' }); 
  console.log('Output ganado was:\n', outputGan);
  app1.get('/ganado', (req, resp) => {
    connection.query('SELECT * FROM ganado', (err, rows, fields) => {
      if (err){
        throw err;
      }else{
        console.log('succes ganado');
        //console.log(`El tipo es:${rows[0].tipo}`);
      };
      resp.send('Conectado a la base de datos ganado');
      const ganado = rows;
      console.log(ganado);
    });

  })
  const outputEmp = execSync('open chrome localhost:1450/empresas', { encoding: 'utf-8' });
  console.log('Output empresas was:\n', outputEmp);
  app1.get('/empresas', (req, resp) => {
    connection.query('SELECT * FROM empresas', (err, rows, fields) => {
      if (err){
        throw err;
      }else{
        console.log('succes empresas');

      };
      const empresas = rows;
      console.log(empresas);
      resp.send('Conectado a la base de datos empresas');
    });

  })
  const outputDates = execSync('open chrome localhost:1450/fechas', { encoding: 'utf-8' });
  console.log('Output fechas was:\n', outputDates);
  app1.get('/fechas', (req, resp) => {
    connection.query('SELECT * FROM fechas', (err, rows, fields) => {
      if (err){
        throw err;
      }else{
        console.log('succes fechas');

      };
      const fechas = rows;
      console.log(fechas);
      resp.send('Conectado a la base de datos fechas');
    });

  })
  const outputPesos = execSync('open chrome localhost:1450/pesos', { encoding: 'utf-8' });
  console.log('Output pesos was:\n', outputPesos);
  app1.get('/pesos', (req, resp) => {
    connection.query('SELECT * FROM pesos', (err, rows, fields) => {
      if (err){
        throw err;
      }else{
        console.log('succes pesos');

      };
      const pesos = rows;
      console.log(pesos);
      resp.send('Conectado a la base de datos pesos');
    });

  })
  const outputVida = execSync('open chrome localhost:1450/vida', { encoding: 'utf-8' });
  console.log('Output vida was:\n', outputVida);
  app1.get('/vida', (req, resp) => {
    connection.query('SELECT * FROM vida', (err, rows, fields) => {
      if (err){
        throw err;
      }else{
        console.log('succes vida');

      };
      const vida = rows;
      console.log(vida);
      resp.send('Conectado a la base de datos vida');
    });
  })
}




// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

let createWindow = () =>{
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'hola',
    webPreferences: {
      contextIsolation: true,
      preload: path.join(app.getAppPath(), 'preload.js')
      
    }  
  })
  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate)
  // Insert menu
  Menu.setApplicationMenu(mainMenu)
  

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Create menu template
const mainMenuTemplate = [
  {
    label: `File`,
    submenu:[
      {
        label: 'hola'
      },
      {
        label: 'Salir',
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click(){
          app.quit()
        }
      }
    ]
  }
];
mainMenuTemplate.push({
  label: 'Dev tools',
    submenu:[
      {
        label: 'Sacar dev tools',
        accelerator: 'Ctrl+I',
        click(item, focusedWindow){
          focusedWindow.toggleDevTools();
        }
      },
      {
        role: 'reload'
      }
    ]
})
// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate',() =>{
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.