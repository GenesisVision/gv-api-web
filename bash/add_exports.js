const shell = require("shelljs");

shell.sed("-i", /declare/, "export declare", "distribution/types.d.ts");