export declare class PlatformCurrencyOld {
    'name': string;
    'rateToGvt': number;
    'color': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PlatformCurrencyOld | undefined;
}
