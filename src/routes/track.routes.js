const trackRouter = require("express").Router();
const trackController = require("../controllers/track.controller");

trackRouter
  .get("/", trackController.getTracks)
  .post("/update/:id", trackController.updateTrack)
  .delete("/delete/:id", trackController.deleteTrack);

module.exports = trackRouter;
