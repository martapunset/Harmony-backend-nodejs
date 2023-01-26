const express = require("express");
const {
  getAllUsers,
  getUserById,
  postUser,
  deleteUser,
  patchUser,
} = require("../../controllers/user.controller");
const { checkJwt } = require("../../middlewares/check.middleware");
const router = express.Router();
router
  .get("/", getAllUsers)
  .get("/:id", checkJwt, getUserById)
  .post("/", postUser)
  .delete("/:id", checkJwt, deleteUser)
  .patch("/:id", checkJwt, patchUser);

module.exports = router;

// const userRouter = require("express").Router();
// const userController = require("../controllers/user.controller");
// const { jwtCheck } = require("../middlewares/jwt-middleware");

// userRouter
//   .get("/", userController.getAllUsers)
//   .post("/", userController.createUser)
//   .patch("/:id", userController.updateUser)
//   .get("/:id", userController.getUserID);

// module.exports = userRouter;
