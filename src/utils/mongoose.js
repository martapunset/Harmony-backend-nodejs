const { PORT, DB, APP_ORIGIN } = require("../config/config");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

function connectDB(app, PORT, DB) {
  mongoose
    .connect(DB)
    .then(() => {
      app.listen(PORT, () => {
        console.log(
          `Connected and listening on port: http://localhost:${PORT}`
        );
      });
    })
    .catch((err) => console.log(err));
}

module.exports = {
  connectDB,
};
