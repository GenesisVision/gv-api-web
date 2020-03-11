import { AssetDetails } from './AssetDetails';

export interface TradingAccountDetails {
    id: string;
    currency: CurrencyEnum;
    login: string;
    apiKey: string;
    asset: AssetDetails;
}

type CurrencyEnum = 'USD' | 'BTC' | 'Undefined' | 'GVT' | 'ETH' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
