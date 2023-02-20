const mongoose = require("mongoose");
const config = require("../config/config");

mongoose.set("strictQuery", false);

function connect() {
  return mongoose.connect(process.env.MONGODB_URI_CLUSTER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = connect;
