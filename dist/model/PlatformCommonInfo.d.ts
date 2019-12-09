import { PlatformCommissionInfo } from './PlatformCommissionInfo';
import { PlatformCurrencyInfo } from './PlatformCurrencyInfo';
import { PlatformUrlInfo } from './PlatformUrlInfo';
export declare class PlatformCommonInfo {
    'platformCommission': PlatformCommissionInfo;
    'platformCurrencies': Array<PlatformCurrencyInfo>;
    'platformUrls': Array<PlatformUrlInfo>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PlatformCommonInfo | undefined;
}
