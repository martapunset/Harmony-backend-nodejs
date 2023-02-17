const connect = require("./database/connect");
const app = require("./server");
const config = require("./config/config");

const startServer = async () => {
  try {
    console.log(">>>>>", "Try to connect");
    connect(config.logger.info("MongoDB connected"));
    app.listen(config.app.PORT, () => {
      config.logger.info(`Server is running in port ${config.app.PORT}`);
    });
  } catch (error) {
    console.log("Someting went wrong, server crashed!");
  }
};

startServer();
