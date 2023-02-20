const dotenv = require("dotenv");
const logger = require("loglevel");

dotenv.config();

logger.enableAll();

const ENV = process.env.NODE_ENV || "development";

const CONFIG = {
  development: {
    app: {
      PORT: process.env.PORT || 4000,
    },

    logger: {
      warn: logger.warn,
      info: logger.info,
      error: logger.error,
    },

    db: {
      uri: process.env.MONGODB_URI_CLUSTER,
    },
  },
};

module.exports = {CONFIG,ENV};
