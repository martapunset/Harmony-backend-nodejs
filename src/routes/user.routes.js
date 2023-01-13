const userRouter = require('express').Router()
const userController = require('../controllers/user.controller')

userRouter
    .post("/segundo", userController.createUser)

module.exports = userRouter