const connect = require("./database/connect");
const app = require("./server");
const config = require("./config/config");

const startServer = async () => {
  try {
    console.log(">>", "Try to connect");
    connect(config.logger.info("MongoDB connected"));
    app.listen(`0.0.0.0:$PORT`, () => {
      config.logger.info(`Server is running in port ${`0.0.0.0:$PORT`}`);
    });
  } catch (error) {
    console.log("Someting went wrong, server crashed!");
  }
};

startServer();
