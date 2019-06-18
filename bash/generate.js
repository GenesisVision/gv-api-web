const shell = require("shelljs");
const dotenv = require("dotenv");

dotenv.config();

shell.exec(
  `java -jar swagger-codegen-cli.jar generate -l javascript -c config.json -t ./template/ -i ${
    process.env.API_URL
  }`
);
