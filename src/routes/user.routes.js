const userRouter = require('express').Router()
const userController = require('../controllers/user.controller')
const { jwtCheck } = require('../middlewares/jwt-middleware')

// userRouter
 
//   .get('/public', userController.publicPing)
//   .get('/private',jwtCheck, userController.privatePing)
//   //.get('/private', userController.privatePing)

// module.exports =  userRouter 
 //.post('/', userController.createUser)

userRouter
  .get("/", userController.getAllUsers)
  .post("/", userController.createUser)
  .patch("/:id", userController.updateUser)
  .get("/:id", userController.getUserID);

module.exports = userRouter;
