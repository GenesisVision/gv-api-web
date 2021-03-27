import { PlatformCommissionInfo } from './PlatformCommissionInfo';
import { PlatformCurrencyInfo } from './PlatformCurrencyInfo';
import { PlatformUrlInfo } from './PlatformUrlInfo';
import { PlatformWithdrawalInfo } from './PlatformWithdrawalInfo';

export interface PlatformCommonInfo {
    platformCommission: PlatformCommissionInfo;
    platformCurrencies: Array<PlatformCurrencyInfo>;
    platformUrls: Array<PlatformUrlInfo>;
    platformWithdrawalInfo: Array<PlatformWithdrawalInfo>;
}

