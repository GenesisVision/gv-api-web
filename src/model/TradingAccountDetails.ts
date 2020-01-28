import { AssetDetails } from './AssetDetails';

export interface TradingAccountDetails {
    id: string;
    currency: CurrencyEnum;
    login: string;
    apiKey: string;
    asset: AssetDetails;
}

type CurrencyEnum = 'USD' | 'BTC' | 'ETH' | 'USDT' | 'Undefined' | 'GVT' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
