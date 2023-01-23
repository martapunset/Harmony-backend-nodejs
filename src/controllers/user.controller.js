const userModel = require("../models/user.models");

const getAllUsers = async (req, res, next) => {
  try {
    const user = await userModel.find({});
    res.status(201).json({ status: "success", msg: "All Users", user });
  } catch (error) {
    res.status(500).send({ status: "fail", msg: error.message });
  }
};

const createUser = async (req, res, next) => {
  const { firstName, lastName, userName, email } = req.body;

  try {
    const user = await userModel.create({
      firstName,
      lastName,
      userName,
      email,
    });
    res.status(201).send({ status: true, data: user });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
};

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { ...fields } = req.body;

  try {
    const updatedUser = await userModel
      .findOneAndUpdate(
        { _id: id },
        {
          $set: {
            ...fields,
          },
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
    const user = await userModel.findById(id).lean().exec();

    res.status(200).send({ status: true, data: user });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
};

const getUserByEmail = async (req, res, next) => {
  const { email }  = req.body  //receive email from clientapp POST method

  try {
    const user = await userModel.findOne({ email } ).lean().exec();
    if (user) {
      res.status(200).send({ status: true, data: user });
      console.log("user from DB, backend response", user)
    }
    else {
       createUser(user)
     }
 
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
    console.log("Get user by email fail")
  }
};

module.exports = { getAllUsers, createUser, getUserID, updateUser, getUserByEmail };
