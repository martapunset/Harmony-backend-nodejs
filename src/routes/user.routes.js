<<<<<<< HEAD
const userRouter = require("express").Router();
const userController = require("../controllers/user.controller");
const { jwtCheck } = require("../middlewares/jwt-middleware");
=======
const userRouter = require('express').Router()
const userController = require('../controllers/user.controller')
const { jwtCheck } = require('../middlewares/jwt-middleware')
>>>>>>> 5ff02aa9636b32650a86af8339a90715e3e73c72

userRouter
  .get("/", jwtCheck, userController.getAllUsers)
  .post("/create", userController.loginUser)
  .patch("/:id", userController.updateUser)
  .get("/:id", userController.getUserID);

module.exports = userRouter;
