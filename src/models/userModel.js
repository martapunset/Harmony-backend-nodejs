const { Schema, model } = require("mongoose");
const validator = require("validator");

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
    },

    lastName: {
      type: String,
    },

    userName: {
      type: String,
      required: [true, "The username is required"],
      unique: true,
    },

    email: {
      type: String,
      trim: true,
      required: [true, "The email is required"],
      unique: true,
      lowercase: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: (props) => `The email ${props.value} is not valid.`,
      },

      img: {
        id: String,
        url: {
          type: String,
        },
      },

      favGenres: [
        {
          type: Schema.Types.ObjectId,
          required: [true, "the ID is requiredd"],
          ref: "genre",
        },
      ],
      favPlaylists: [
        {
          type: Schema.Types.ObjectId,
          ref: "playlist",
        },
      ],
      favAlbums: [
        {
          type: Schema.Types.ObjectId,
          ref: "album",
        },
      ],
      favTracks: [
        {
          type: Schema.Types.ObjectId,
          ref: "track",
        },
      ],
      followers: [
        {
          type: Schema.Types.ObjectId,
          ref: "user",
        },
      ],
      following: [
        {
          type: Schema.Types.ObjectId,
          ref: "user",
        },
      ],
      isVerified: {
        type: Boolean,
        default: false,
      },
      isAdmin: {
        type: Boolean,
        default: false,
      },
      isLogged: {
        type: Boolean,
        default: false,
      },
    },
  },
  { timestamps: true }
);

module.exports = model("user", UserSchema);
