const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
let parser = bodyParser.urlencoded({extended:true});
app.use(parser);
const port = 3001;

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
        "<H1>holaa mundo</H1>"
    );
    }
);


app.post('/registrarUsuario',(req,res)=>{

    //const exito =  Insert INTO.......;
    console.log("Solicitud post");
    // console.log(req);
    console.log(req.body);

    const usuario = req.body.Usuario;
    const contrasena = req.body.Contrasena;
    console.log(usuario,contrasena)
   /*
    if(exito){
     res.status(200).send(
        {
            mensaje: "REGISTRO salvado"
        }
    );
    }else{
     res.status(500).send(
        {
            mensaje: "lo sentimos ocurrio un error"
        }
    );
    }
   */

    res.status(201).send(
        {
            mensaje: "todo salio bien",
            id: "el nuevo id es 123"
        }
    );
    
    }
);

app.put('/editarUsuario',(req,res)=>{
    console.log("actualizar info");
    //responder. 
    res.status(203).send(
        {
            mensaje: "Actualizacion exitosa!",
            
        }
    );
    }
);

app.delete('/eliminarUsuario/:id',(req,res)=>{
    console.log("eliminar user");
    console.log(req.params.id );
    //responder. 
    res.status(204).send(
        {
            mensaje: "Eliminado",
            cantidad_registros_eliminados: 20,
        }
    );
    }
);

app.get('/home',(req,res)=>{
    console.log("retornando homepage ", __dirname, __filename);
    const archivo = path.join(__dirname, 'homepage.html'); 
    res.status(200).sendFile(archivo);
    }
);


app.get('/saludar/:saludo',(req,res)=>{
    console.log(req.params.saludo);
    res.status(200).send({mensaje: "Hola!"});
    }
);