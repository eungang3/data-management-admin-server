require("dotenv").config();
const express = require("express");
require("express-async-errors");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");
const myDataSource = require("./models/db.config");
//const { swaggerUi, specs } = require("./swagger/swagger");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger/swagger-output.json");

// DB 연결
myDataSource
  .initialize()
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.log(err);
  });

const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(cors());
  app.use(router);
  app.use(errorHandler);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile, { explorer: true }));
  return app;
};

module.exports = { createApp };
