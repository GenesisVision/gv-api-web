import { Currency } from './Currency';

export interface WalletWithdrawalInfo {
    currency: Currency;
    description: string;
    logoUrl: string;
    commission: number;
    rateToGvt: number;
    availableToWithdrawal: number;
}

