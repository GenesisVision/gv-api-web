import { Currency } from './Currency';
import { WalletWithdrawalCurrencyInfo } from './WalletWithdrawalCurrencyInfo';

export interface PlatformWithdrawalInfo {
    currency: Currency;
    title: string;
    logoUrl: string;
    isWithdrawalEnabled: boolean;
    commissions: Array<WalletWithdrawalCurrencyInfo>;
}

