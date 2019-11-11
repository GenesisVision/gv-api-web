import { PlatformCommissionInfo } from './PlatformCommissionInfo';
import { PlatformCurrencyInfo } from './PlatformCurrencyInfo';
export declare class PlatformCommonInfo {
    'platformCommission': PlatformCommissionInfo;
    'platformCurrencies': Array<PlatformCurrencyInfo>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PlatformCommonInfo | undefined;
}
