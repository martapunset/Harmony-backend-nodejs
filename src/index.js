// const express = require('express') //no

const connect = require('./database/connect')
const app = require('./server');
const config = require('./config/config')

// const app = express() //no

//peticiones fuera enviarlas a rutas
// app.get('/', (req, res) => {
//     res.send('hello World')
// })

//llamaremos a la funcion conect para k se conecte a la base de datos
//y despues (.then), haremos algo, k se levante el servidor
connect().then(async function onServerinit () {
    config.logger.info('MongoDB connected')
    
    app.listen(process.env.PORT, () => {
        config.logger.info(`Server is running in port ${process.env.PORT}`)
    }) 
})

//entra por el index, mira el endpoint se va al router, mirando tb el get, post...
//ejecuta una funcion u otra , k son las del coontrlador