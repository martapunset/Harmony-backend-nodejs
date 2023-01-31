const trackRouter = require("express").Router();
const trackController = require("../controllers/track.controller");

trackRouter
  .get("/", trackController.getTracks)
  .get("/search", trackController.searchTracks)
  .post("/update/:id", trackController.updateTrack)
  .delete("/delete/:id", trackController.deleteTrack);

module.exports = trackRouter;
