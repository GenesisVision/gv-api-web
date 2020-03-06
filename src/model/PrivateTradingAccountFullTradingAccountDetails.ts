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

type CurrencyEnum = 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
