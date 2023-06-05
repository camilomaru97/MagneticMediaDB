const express = require('express');
const cors = require('cors');
require('dotenv').config();

//Servidor
const app = express();

//Cors
app.use(cors())

//Directorio publicas
app.use(express.static('public'))

// Lectura y parseo del body
app.use(express.json());

//Rutas
app.get('/prueba', (req, res) => {
    res.json({
        ok:true
    })
})

//Escuchar peticiones
const server = app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
})

module.exports = { app, server }