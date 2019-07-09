const shell = require("shelljs");
const dotenv = require("dotenv");

dotenv.config();

shell.exec(
  `java -jar swagger-codegen-cli.jar generate -l typescript-fetch -t ./template/typescript -i ${
    process.env.API_URL
  }`
);
