const userRouter = require("express").Router();
const userController = require("../controllers/user.controller");
const { jwtCheck } = require("../middlewares/jwt-middleware");

userRouter
  .get("/", jwtCheck, userController.getAllUsers)
  .post("/create", userController.loginUser)
  .patch("/:id", userController.updateUser)
  .get("/:id", userController.getUserID);

module.exports = userRouter;
