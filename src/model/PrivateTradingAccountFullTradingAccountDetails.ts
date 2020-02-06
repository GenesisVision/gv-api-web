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

type CurrencyEnum = 'USD' | 'BTC' | 'ETH' | 'USDT' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
