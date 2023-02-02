const likedRouter = require("express").Router();
const likedController = require("../controllers/albums.controller");

likedRouter.get("/liked", likedController.getAllLiked);

module.exports = likedRouter;
