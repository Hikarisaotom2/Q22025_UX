const express = require('express');

const app = express();
const port = 3000;

// callback: funcion que se ejecuta al final de un proceso async
app.listen(port,()=>{
    console.log("El servidor se esta ejecutando en el puerto ", port);
} );

console.log("Esta linea 'deberia' ejecutarse despues del listen", port);