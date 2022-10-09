const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });

const options = {
  info: {
    title: "Admin용 데이터 관리 프로그램",
    description: "JUSTCODE-6기-(BE)3팀 API documentation",
  },
  servers: [
    {
      url: "http://localhost:8000",
    },
  ],
  schemes: ["http"],
};
const outputFile = "./swagger-output.json";
const endpointsFiles = ["../routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, options);
