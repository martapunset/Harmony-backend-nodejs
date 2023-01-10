const mongoose = require('mongoose')   //same as // Using ES6 imports //import mongoose from 'mongoose';
const config = require('../config/config')
mongoose.set('strictQuery', false)
function connect () {
  return mongoose.connect(config.db.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

module.exports = connect
