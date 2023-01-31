const userRouter = require("express").Router();
const userController = require("../controllers/user.controller");
const { jwtCheck } = require("../middlewares/jwt-middleware");
const multer = require("multer");

// userRouter
//   .get('/public', userController.publicPing)
//   .get('/private',jwtCheck, userController.privatePing)
//   //.get('/private', userController.privatePing)

// module.exports =  userRouter
//.post('/', userController.createUser)

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

userRouter
  .get("/", jwtCheck, userController.getAllUsers)
  .post("/create", userController.loginUser)
  .patch("/:id", upload.single("thumnail"), userController.updateUser)
  .get("/:id", userController.getUserID);

module.exports = userRouter;
