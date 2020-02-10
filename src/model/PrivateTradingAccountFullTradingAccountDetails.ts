import { PrivateTradingAccountType } from './PrivateTradingAccountType';

export interface PrivateTradingAccountFullTradingAccountDetails {
    currency: CurrencyEnum;
    leverage: number;
    apiKey: string;
    login: string;
    balance: number;
    type: PrivateTradingAccountType;
    subscriptions: number;
    isExternal: boolean;
}

type CurrencyEnum = 'USDT' | 'USD' | 'BTC' | 'ETH' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
