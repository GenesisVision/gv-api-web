import { AssetDetails } from './AssetDetails';

export interface TradingAccountDetails {
    id: string;
    currency: CurrencyEnum;
    login: string;
    apiKey: string;
    asset: AssetDetails;
}

type CurrencyEnum = 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
