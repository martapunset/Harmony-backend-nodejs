const connectDB = require("./database/connect");
const app = require("./server");
const config = require("./config/config");

// connectDB().then(async function onServerinit() {
//   config.logger.info("MongoDB connected");

//   app.listen(process.env.PORT, () => {
//     config.logger.info(`Server is running in port ${process.env.PORT}`);
//   });
// });

// First we need to check that we have connection to our DataBase then we execute server

const startServer = async () => {
  try {
    await connectDB(config.logger.info("MongoDB connected successfully"));
    app.listen(process.env.PORT, () => {
      config.logger.info(`Server is running in port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log({ error, msg: "Bad connection" });
  }
};

startServer();
