const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const { urlencoded} = require('body-parser')
const cors = require('cors')

//const albumsRoutes = require('./routes/albums.routes')
//const authorRoutes = require('./routes/author.routes')
const userRouter = require('./routes/user.routes')
//const errorMiddleware = require('./middlewares/error.middleware')

const app = express()

const corsOptions = {
  origin: 'http://localhost:5173'
}
/*
app.use(
  cors({
    origin: config.development.client.URL,
  })
);
*/
//app.use(morgan('dev'))
app.use(helmet())
//app.use(urlencoded())
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }))
//app.use('/album', albumsRoutes)
//app.use('/author', authorRoutes)
app.use('/user', userRouter)
//app.use('/public', userRouter)
//app.use('/private', userRouter)

//app.use(errorMiddleware, authMiddleware)

module.exports = app
