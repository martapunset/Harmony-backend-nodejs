const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const { json } = require('body-parser') //express entiend al a madnera en la ke le has envado los arcjivos
const albumsRoutes = require('./routes/album.routes')
// const authorRoutes = require('./routes/author.routes')
const userRoutes = require('./routes/user.routes')

const app = express()

// const myLogger = function (req, ser, next){
//     console.log('Logged')
//     next()
// }

app.use(morgan('dev')) //dev para k sepa como mostrar los mensajes por consola
app.use(helmet())
app.use(json()) //para que pueda entender los jaosn de las peiciones
// app.use(myLogger)
app.use('/album', albumsRoutes) //cuanda haga la peticion a album por ejemplo, entonces ejecutará todos los metdos de las rutas
// app.use('/author', authorRoutes)
app.use('/user', userRoutes)  //ya no van todas las peticiones a album ahora tb van a user

module.exports = app