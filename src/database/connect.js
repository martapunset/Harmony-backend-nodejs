//conectar con la base de datos
const mongoose = require('mongoose')
const config = require('../config/config')

mongoose.set('strictQuery', false) //esto es un warning

function connect() {
    //nos conecta a la uri ya definida:
    return mongoose.connect(config.db.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}
//esta funcion es la que nos conecta a la base de datos al arrancar el proyecto
module.exports = connect