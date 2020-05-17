import { AmountWithCurrency } from './AmountWithCurrency';
import { Currency } from './Currency';
import { DashboardTradingAssetStatus } from './DashboardTradingAssetStatus';
import { PrivateTradingAccountType } from './PrivateTradingAccountType';

export interface DashboardTradingAssetCommonDetails {
    title: string;
    status: DashboardTradingAssetStatus;
    creationDate: Date;
    balance: number;
    login: string;
    currency: Currency;
    leverage: number;
    type: PrivateTradingAccountType;
    balances: Array<AmountWithCurrency>;
    supportedCurrencies: Array<Currency>;
}

