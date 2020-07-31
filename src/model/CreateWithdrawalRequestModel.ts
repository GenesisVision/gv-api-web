import { Currency } from './Currency';

export interface CreateWithdrawalRequestModel {
    amount: number;
    currency: Currency;
    address: string;
    twoFactorCode: string;
}

