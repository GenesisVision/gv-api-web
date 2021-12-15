import { AmountWithLogoCurrency } from './AmountWithLogoCurrency';
import { Currency } from './Currency';
import { DashboardTradingAssetStatus } from './DashboardTradingAssetStatus';
import { PrivateTradingAccountType } from './PrivateTradingAccountType';
import { TradingAccountPermission } from './TradingAccountPermission';

export interface DashboardTradingAssetCommonDetails {
    title: string;
    status: DashboardTradingAssetStatus;
    creationDate: Date;
    balance: number;
    login: string;
    currency: Currency;
    originalCurrency: Currency;
    leverage: number;
    type: PrivateTradingAccountType;
    balances: Array<AmountWithLogoCurrency>;
    supportedCurrencies: Array<Currency>;
    permissions: Array<TradingAccountPermission>;
}

