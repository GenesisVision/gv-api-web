import { Currency } from './Currency';

export interface NewTradingAccountRequest {
    depositAmount: number;
    depositWalletId: string;
    currency: Currency;
    leverage: number;
    brokerAccountTypeId: string;
}

