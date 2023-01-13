const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const { json } = require('body-parser') 
const albumsRoutes = require('./routes/album.routes')
const userRoutes = require('./routes/user.routes')

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(json())
app.use('/album', albumsRoutes) 
app.use('/user', userRoutes)  

module.exports = app