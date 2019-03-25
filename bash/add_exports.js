const shell = require("shelljs");

shell.sed("-i", /declare/, "export declare", "distribution/types.d.ts");
shell.sed("-i", /changecancel: any;/, "cancel: () => CancelablePromise<T>", "distribution/types.d.ts");
shell.sed("-i", /'String'/, "string", "distribution/types.d.ts");
shell.sed("-i", /'Number'/, "number", "distribution/types.d.ts");
