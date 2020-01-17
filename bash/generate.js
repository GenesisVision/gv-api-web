const shell = require("shelljs");
const dotenv = require("dotenv");

dotenv.config();

shell.exec(
  `java -cp typescript-swagger-codegen-1.0.0.jar:swagger-codegen-cli.jar io.swagger.codegen.v3.cli.SwaggerCodegen generate -l typescript -i ${process.env.API_URL} -o "./"`
);
