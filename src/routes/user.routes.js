const userRouter = require('express').Router()
const userController = require('../controllers/user.controller')

userRouter
    .post("/segundo", userController.createUser)
    .patch('/update', userController.updateUser)
    .get('/:id', userController.getUserID)

module.exports = userRouter