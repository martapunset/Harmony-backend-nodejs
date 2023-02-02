const mongoose = require("mongoose");
const config = require("../config/config");

mongoose.set("strictQuery", true);

function connect() {
  return mongoose.connect(config.db.uri);
}

module.exports = connect;
