export declare class PlatformCurrencyInfo {
    'name': string;
    'color': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PlatformCurrencyInfo | undefined;
}
