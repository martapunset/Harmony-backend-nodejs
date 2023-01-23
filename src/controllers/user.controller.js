// <<<<<<< HEAD

// async function privatePing(req, res, next) {
//     console.log('privada');
//     return res.status(200).json({
//         msg: 'Back logueado dice: Bienvenido a Harmony'
//     })
// }
//   async function publicPing (req, res, next) {
//     console.log('publica');
//     return res.status(200).json({
//         msg: 'Back dice: No hace falta que te loguees'
//     })

// }
//   module.exports={publicPing, privatePing}

// =======
const userModel = require("../models/user.models");

const getAllUsers = async (req, res, next) => {
  const { firstName, lastName, userName, email } = req.body;

  try {
    const user = await userModel.find({
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

module.exports = { getAllUsers, createUser, getUserID, updateUser };
