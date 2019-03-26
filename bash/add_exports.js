const shell = require("shelljs");

shell.sed("-i", /declare/, "export declare", "distribution/types.d.ts");
shell.sed("-i", /changecancel: any;/, "cancel: () => CancelablePromise<T>;", "distribution/types.d.ts");
shell.sed("-i", /changecatch: any;/, "catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): CancelablePromise<T | TResult>;", "distribution/types.d.ts");
shell.sed("-i", /changethen: any;/, "then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): CancelablePromise<TResult1 | TResult2>;", "distribution/types.d.ts");
shell.sed("-i", /'String'/, "string", "distribution/types.d.ts");
shell.sed("-i", /'Number'/, "number", "distribution/types.d.ts");
