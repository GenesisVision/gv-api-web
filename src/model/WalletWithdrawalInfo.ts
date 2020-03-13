import { Currency } from './Currency';

export interface WalletWithdrawalInfo {
    currency: Currency;
    description: string;
    logo: string;
    commission: number;
    rateToGvt: number;
    availableToWithdrawal: number;
}

