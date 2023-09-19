// Instala NodeJS en tu máquina
// Crea un pequeño servidor que nos retorne en formato JSON un arreglo con una lista de tareas.

// Inicia el servidor y asegurate de que todo esté en orden.

// Utilizando npm instala nodemon para las tareas de reinicio de tu servidor.

// Realiza un cambio haciendo que cada tarea sea un objeto añadiendo a cada tarea una descripción, un estado de completado o pendiente y un identificador o id.

const express = require("express");
const app = express();
const port = 8000;

let listaTarea = [
    {id: 1, actividad: "limpiar", completado: false},
    {id: 2, actividad: "estudiar", completado: true},
]

app.use(express.json());

app.get("/", (req, res)=>{
    res.send(JSON.stringify(listaTarea));
});

app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`);
});

