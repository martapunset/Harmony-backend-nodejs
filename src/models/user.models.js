const { Schema, model } = require('mongoose')
const validator = require('validator')

const UserSchema = Schema({
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
    password: { //foto 
        type: String,
        required: [true, 'The password is required'],
        minlength: [8, 'The password is too short']
    }
})

const UserModel = model("users", UserSchema)

module.exports = UserModel