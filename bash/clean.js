const shell = require("shelljs");

shell.rm("-rf", "./api", "./dist", "./model", "ApiClient.ts", "constructFromObject.ts", "index.ts");
