import { Currency } from './Currency';

export interface PlatformWithdrawalInfo {
    withdrawalFee: number;
    currency: Currency;
    isWithdrawalEnabled: boolean;
}

