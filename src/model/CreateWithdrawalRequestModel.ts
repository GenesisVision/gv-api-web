import { Blockchain } from './Blockchain';
import { Currency } from './Currency';

export interface CreateWithdrawalRequestModel {
    amount: number;
    currency: Currency;
    blockchain: Blockchain;
    address: string;
    twoFactorCode: string;
}

