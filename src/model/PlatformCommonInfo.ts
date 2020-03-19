import { PlatformCommissionInfo } from './PlatformCommissionInfo';
import { PlatformCurrencyInfo } from './PlatformCurrencyInfo';
import { PlatformUrlInfo } from './PlatformUrlInfo';

export interface PlatformCommonInfo {
    platformCommission: PlatformCommissionInfo;
    platformCurrencies: Array<PlatformCurrencyInfo>;
    platformUrls: Array<PlatformUrlInfo>;
}

