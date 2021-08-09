import { AmountWithLogoCurrency } from './AmountWithLogoCurrency';
import { Currency } from './Currency';
import { PrivateTradingAccountType } from './PrivateTradingAccountType';
import { TradingAccountPermission } from './TradingAccountPermission';

export interface PrivateTradingAccountFullTradingAccountDetails {
    currency: Currency;
    leverage: number;
    apiKey: string;
    login: string;
    balance: number;
    balances: Array<AmountWithLogoCurrency>;
    type: PrivateTradingAccountType;
    subscriptions: number;
    isExternal: boolean;
    showTradingLog: boolean;
    supportedCurrencies: Array<Currency>;
    permissions: Array<TradingAccountPermission>;
}

