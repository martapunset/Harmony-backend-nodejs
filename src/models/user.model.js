const { Schema, model } = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const UserSchema = Schema({


  firstName: {
    type: String,
    required: [true, 'The firstName is super required']
    },
  lastName: {
        type: String,
        required: [true, 'The lastName is super required']
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
    }
  /*
  password: {
    type: String,
    required: [true, 'The password is required'],
    minlength: [8, 'The password is too short']

  }
  */
})
/*
UserSchema.pre('save', async function passwordPreSave (next) {
  try {
    const hash = await bcrypt.hash(this.password, 12)
    this.password = hash
    return next()
  } catch (error) {
    return next(error)
  }
})
*/
const UserModel = model('user', UserSchema)

module.exports = UserModel
