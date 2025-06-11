const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
let parser = bodyParser.urlencoded({ extended: true });


var corsOptions = {
    origin: '*'
}
let corsPolicy = cors(corsOptions);
//Agregando servicios 
app.use(parser);
app.use(corsPolicy);
// app.options("*",corsPolicy);
const port = 3001;
const uri = "mongodb+srv://testux:Password1!@cluster0.boshskn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster"

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
}
);

async function run() {
    try {
        await client.connect();
        console.log("Conectados a la DB")
        await client.db("sample_mflix").command({ ping: 1 });
        console.log("ping exitoso! ")
    } catch (error) {
        console.log(error);
    }
}


// callback: funcion que se ejecuta al final de un proceso async
app.listen(port, () => {
    console.log("El servidor se esta ejecutando en el puerto ", port);
    run();
});

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

app.get('/mostrarInfo', (req, res) => {
    console.log(req);
    console.log("Procesando solicitud");
    //responder. 
    res.status(200).send(
        "<H1>holaa mundo</H1>"
    );
}
);


app.post('/registrarUsuario', async (req, res) => {
    try {

        const baseDatos = client.db("claseux");
        const colecion = baseDatos.collection("alumnos");
        const usuario = req.body.Usuario;
        const contrasena = req.body.Contrasena;
        const documento = {
            Username: usuario,
            password: contrasena
        };

        /*
        C LISTO 
        R 
        U
        D
        */
        const response = await colecion.insertOne(documento);

        res.status(201).send(
            {
                mensaje: "Usuario creado",
                repuesta:response
            }
        );
    } catch (error) {
        res.status(500).send(
            {
                mensaje: "algo salio mal lo sentimos",
                repuesta: error
            }
        );
    }

}
);

app.put('/editarUsuario', (req, res) => {
    console.log("actualizar info");
    //responder. 
    res.status(203).send(
        {
            mensaje: "Actualizacion exitosa!",

        }
    );
}
);

app.delete('/eliminarUsuario/:id', (req, res) => {
    console.log("eliminar user");
    console.log(req.params.id);
    //responder. 
    res.status(204).send(
        {
            mensaje: "Eliminado",
            cantidad_registros_eliminados: 20,
        }
    );
}
);

app.get('/home', (req, res) => {
    console.log("retornando homepage ", __dirname, __filename);
    const archivo = path.join(__dirname, 'homepage.html');
    res.status(200).sendFile(archivo);
}
);


app.post('/saludar/:saludo', (req, res) => {
    console.log(req.params.saludo);
    res.status(200).send({ mensaje: "Hola!" });
}
);

app.get('/saludar/:saludo', (req, res) => {
    console.log(req.params.saludo);
    res.status(200).send({ mensaje: "Hola!" });
}
);


app.get('/infoPrincipal', (req, res) => {
    /*
     solicitud a BDD, imagenes, datos 
    */
    console.log("ENVIANDO INFO PRINCIPAL");
    res.status(200).send({
        informacion: [
            { id: 123, titulo: "lilo & stitch", },
            { id: 345, titulo: "Destino final 6." },
            { id: 678, titulo: "Misión imposible 6 ." },
            { id: 9999, titulo: "F1." },
        ]
    });
}
);