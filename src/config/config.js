require("dotenv").config();

// DB connection
const PORT = process.env.PORT || 4000;
const DB = process.env.MONGO_URI;
// Auth0
const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE;
const AUTH0_ISSUER = process.env.AUTH0_ISSUER;

// Front page
const APP_ORIGIN = process.env.APP_ORIGIN;

// Cloudinary
const CLOUD_NAME = process.env.CLOUD_NAME;
const CLOUD_KEY = process.env.CLOUD_KEY;
const CLOUD_SECRET = process.env.CLOUD_SECRET;

module.exports = {
  PORT,
  DB,
  AUTH0_AUDIENCE,
  AUTH0_ISSUER,
  APP_ORIGIN,
  CLOUD_NAME,
  CLOUD_KEY,
  CLOUD_SECRET,
};

// const dotenv = require("dotenv");
// const logger = require("loglevel");

// dotenv.config();

// logger.enableAll();

// const ENV = process.env.NODE_ENV || "development";

// const CONFIG = {
//   development: {
//     app: {
//       PORT: process.env.PORT || 4000,
//     },
//     logger: {
//       warn: logger.warn,
//       info: logger.info,
//       error: logger.error,
//       trace: logger.trace,
//       debug: logger.debug,
//     },

//     db: {
//       uri: process.env.MONGODB_URI_CLUSTER,
//     },
//   },
//   production: {
//     app: {
//       PORT: process.env.PORT || 4001,
//     },
//     logger: {
//       warn: logger.warn,
//       info: logger.info,
//       error: logger.error,
//       trace: logger.trace,
//       debug: logger.debug,
//     },
//     db: {
//       url: process.env.BASE_URL + "/album",
//     },
//   },
// };

// module.exports = CONFIG[ENV];
