const { Schema, model } = require("mongoose");
const validator = require("validator");

const UserSchema = Schema({
  firstName: {
    type: String,
    required: [true, "the firstname is required"],
  },

  lastName: {
    type: String,
    required: [true, "the lastname is required"],
  },

  userName: {
    type: String,
    unique: true,
  },

  email: {
    type: String,
    required: [true, "The email is required"],
    trim: true,
    unique: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: (props) => `The email ${props.value} is not valid`,
    },
  },

  picture: {
    type: String,
  },

  following: [{ userId: String }],

  followedBy: [{ userId: String }],
});

const UserModel = model("users", UserSchema);

module.exports = UserModel;
