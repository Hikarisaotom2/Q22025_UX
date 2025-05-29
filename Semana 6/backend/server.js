const express = require('express');

const app = express();
const port = 3000;

// callback: funcion que se ejecuta al final de un proceso async
app.listen(port,()=>{
    console.log("El servidor se esta ejecutando en el puerto ", port);
} );

console.log("Esta linea 'deberia' ejecutarse despues del listen", port);


/*
GET -> READ 
POST -> CREATE
PUT -> UPDATE 
DELETE -> DELETE
*/

/*
1) BE tiene el control TOTAL.
  a) Establece como vamos a realizar las peticiones
  b) BE decide a quien o a que responder 
  c) BE decide QUE va a responder 
  d) BE decide como gestiona la información que se le envia
  e) BE decide que es un error / o que se considera un error
*/

/*
    Terminos importantes: 
    - Ruta: una dirección a la cual dirigiremos la solicitud
    - Payload: información que viene con la solicitud.
    - Endpoint: es la combinación de la ruta + el metodo HTTP.  
*/

app.get('/mostrarInfo',(req,res)=>{
    console.log(req);
    console.log("Procesando solicitud");
    //responder. 
    res.status(200).send(
        {
            mensaje: "Hola desde el backend!"
        }
    );
    }
);

