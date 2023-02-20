const connect = require("./src/database/connect");
const app = require("./src/server");
const { CONFIG } = require("./src/config/config.js");

const startServer = async () => {
  try {
    console.log(">>", "Try to connect");
    connect();
    app.listen(CONFIG.development.app.PORT, () => {
      CONFIG.development.logger.info(`Server is running in port ${CONFIG.development.app.PORT}`);
    });
  } catch (error) {
    console.log("Someting went wrong, server crashed!");
  }
};

startServer();
