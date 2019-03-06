const shell = require("shelljs");

shell.sed("-i", /declare/, "export declare", "distribution/types.d.ts");
shell.sed("-i", /changeabort: any;/, "abort: (data: T) => CancelablePromise<T>", "distribution/types.d.ts");
