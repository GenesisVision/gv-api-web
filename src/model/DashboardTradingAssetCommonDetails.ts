import { DashboardTradingAssetStatus } from './DashboardTradingAssetStatus';
import { PrivateTradingAccountType } from './PrivateTradingAccountType';

export interface DashboardTradingAssetCommonDetails {
    title: string;
    status: DashboardTradingAssetStatus;
    creationDate: Date;
    balance: number;
    login: string;
    currency: CurrencyEnum;
    leverage: number;
    type: PrivateTradingAccountType;
}

type CurrencyEnum = 'USD' | 'BTC' | 'ETH' | 'USDT' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
