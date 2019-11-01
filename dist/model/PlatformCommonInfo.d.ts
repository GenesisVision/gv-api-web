import { PlatformCurrencyInfo } from './PlatformCurrencyInfo';
export declare class PlatformCommonInfo {
    'platformCurrencies': Array<PlatformCurrencyInfo>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PlatformCommonInfo | undefined;
}
