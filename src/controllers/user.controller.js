const userModel = require('../models/user.models')

const createUser = async (req, res, next) => {
    
    const { firstName, email, password } = req.body

    try {
        const user = await userModel.create({
            firstName,
            email,
            password
        })
        res.status(201).send({ status: true, data: user })
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}

const updateUser = async (req, res, next) => {

    const { id } = req.params
    const { ...fields } = req.body

    try {
        const updatedUser = await userModel.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    ...fields
                }
            },
            { new: true }
        ).lean().exec()

        res.status(200).send({ status: true, data: updatedUser  });
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}

const getUserID = async (req, res, next) => {
    const {id} = req.params;

        try {
            const user = await userModel.findById(id).lean().exec()

            res.status(200).send({ status: true, data: user })
        } catch (error) {
            res.status(500).send({ status: false, msg: error.message })
        }
    }

module.exports = { createUser, getUserID, updateUser }