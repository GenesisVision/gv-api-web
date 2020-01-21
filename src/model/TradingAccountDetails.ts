import { AssetDetails } from './AssetDetails';

export interface TradingAccountDetails {
    id: string;
    currency: CurrencyEnum;
    login: string;
    apiKey: string;
    asset: AssetDetails;
}

type CurrencyEnum = 'USD' | 'USDT' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
