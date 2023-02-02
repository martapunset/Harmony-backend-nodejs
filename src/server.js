const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const { json } = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const userRouter = require("./routes/user.routes");
const artistsRouter = require("./routes/artists.routes");
const tracksRouter = require("./routes/track.routes");
const playlistRouter = require("./routes/playlist.routes");

const app = express();

// Corssorigin request between front and back
app.use(cors());

// Request methods + sizes + status msgs
app.use(morgan("dev"));

// Security when testing routes (boyh front & back)
app.use(helmet());

//To compilate when sending json data/objs
app.use(
  json({
    limit: "50mb",
  })
);
// Our app nndpoints
app.use("/playlists", playlistRouter);
app.use("/user", userRouter);
app.use("/artists", artistsRouter);
app.use("/tracks", tracksRouter);

module.exports = app;
