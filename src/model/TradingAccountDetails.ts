import { AssetDetails } from './AssetDetails';

export interface TradingAccountDetails {
    id: string;
    currency: CurrencyEnum;
    login: string;
    apiKey: string;
    asset: AssetDetails;
}

type CurrencyEnum = 'USDT' | 'USD' | 'BTC' | 'ETH' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
