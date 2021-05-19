import { Currency } from './Currency';
import { WalletWithdrawalCurrencyInfo } from './WalletWithdrawalCurrencyInfo';

export interface WalletWithdrawalInfo {
    currency: Currency;
    description: string;
    logoUrl: string;
    commissions: Array<WalletWithdrawalCurrencyInfo>;
    rateToGvt: number;
    availableToWithdrawal: number;
}

