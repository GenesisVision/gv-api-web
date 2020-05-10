import { Currency } from './Currency';
import { PrivateTradingAccountType } from './PrivateTradingAccountType';

export interface PrivateTradingAccountFullTradingAccountDetails {
    currency: Currency;
    leverage: number;
    apiKey: string;
    login: string;
    balance: number;
    type: PrivateTradingAccountType;
    subscriptions: number;
    isExternal: boolean;
    showTradingLog: boolean;
}

