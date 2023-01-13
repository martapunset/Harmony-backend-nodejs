//por ejmplo del usuario necesito oel password, el firstname y el email
// sale de aki desestructurado: const mongoose = require ('mongoose')
const { Schema, model } = require('mongoose')
const validator = require('validator')

const UserSchema = Schema({
    //todoslos campos del cdocumento:
    firstName: {
        type: String,
        required: [true, "the firstname is required"]
    },
    email: {
        type: String,
        required: [true, 'The email is required'],
        trim: true,
        unique: true,
        validate: {
            validator: (value) => validator.isEmail(value),
            message: (props) => `The email ${props.value} is not valid`
        }
    },
    password: {
        type: String,
        required: [true, 'The password is required'],
        minlength: [8, 'The password is too short']
    }
})
//aki se meteria el bcrypt

//todo lo anterior lo tenemos k meter en un modelo:
const UserModel = model("users", UserSchema) //este nombre es una coleccion de la base de datos, en este caso user.

module.exports = UserModel