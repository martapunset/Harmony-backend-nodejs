const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const { json } = require("body-parser");
const cors = require("cors");
const albumsRouter = require("./routes/album.routes");
const userRouter = require("./routes/user.routes");
const genreRouter = require("./routes/genre.routes");
const artistsRouter = require("./routes/artists.routes");
const tracksRouter = require("./routes/track.routes");
const playlistRouter=require("./routes/playlist.routes")

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(
  json({
    limit: "50mb",
  })
);
app.use("/playlist", playlistRouter);
app.use("/album", albumsRouter);
app.use("/user", userRouter);
app.use("/genre", genreRouter);
app.use("/artist", artistsRouter);
app.use("/tracks", tracksRouter);

module.exports = app;
