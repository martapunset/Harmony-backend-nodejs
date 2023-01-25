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
    const userDBexists = await userModel.findOne({email}).lean().exec();
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
/*
const getUserByEmail = async (req, res, next) => {
  const { email }  = req.body  //receive email from clientapp POST method
  //const user=req.body
//  console.log(req.body)
  try {
    const user = await userModel.findOne({ email } ).lean().exec();
    if (user) {
      console.log("user exists from DB, backend response", user)
      res.status(200).send({ status: true, data: user });
      
    } else {
      console.log("user doesnt exist in DB")
      res.status(400).send({ message: "User doesnt exist in DB. Need to be created" });
     
    }
   
 
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
    
    
    
  }
};
*/

module.exports = { getAllUsers, loginUser, getUserID, updateUser };
