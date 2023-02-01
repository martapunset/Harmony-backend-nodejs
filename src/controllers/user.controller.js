const { create } = require("../models/user.models");
const userModel = require("../models/user.models");

const getAllUsers = async (req, res, next) => {
  try {
    const user = await userModel.find({});
    res.status(201).json({ status: "success", msg: "All Users", user });
  } catch (error) {
    res.status(500).send({ status: "fail", msg: error.message });
  }
};

const loginUser = async (req, res, next) => {
  const { email } = req.body;

  try {
    const userDBexists = await userModel.findOne({ email }).lean().exec();
    if (userDBexists) {
      res.status(200).send({ status: true, data: userDBexists });

    } else {

      const userDB = await userModel.create(req.body)
      res.status(201).send({ status: true, data: userDB });
    }


  } catch (error) {

    res.status(500).send({ status: false, msg: error.message, });
  }
};






const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { firstName, lastName, userName, likedTracks, likedPlaylists } = req.body;

  try {
    const updatedUser = await userModel
      .findOneAndUpdate(
        { _id: id },
        {
          $set: {
            firstName: firstName,
            lastName: lastName,
            userName: userName
          },
          $push: {
            likedPlaylists: likedPlaylists,
            likedTracks: likedTracks
          }
        },
        { new: true }
      )
      .lean()
      .exec();

    res.status(200).send({ status: true, data: updatedUser });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
};

const getUserID = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await userModel.findById(id)
      .populate("likedTracks") //field of user that has extern data
      .lean().exec();

    res.status(200).send({ status: true, data: user.likedTracks });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
};


module.exports = { getAllUsers, loginUser, getUserID, updateUser };
