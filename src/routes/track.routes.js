const trackRouter = require("express").Router();
const trackController = require("../controllers/track.controller");

trackRouter
  .get("/", trackController.getTracks)
  .post("/", trackController.updateTrack)
  .delete("/:id", trackController.deleteTrack);

module.exports = trackRouter;
