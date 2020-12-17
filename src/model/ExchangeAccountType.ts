import { BrokerTradeServerType } from './BrokerTradeServerType';
import { TradingAccountPermission } from './TradingAccountPermission';

export interface ExchangeAccountType {
    id: string;
    name: string;
    description: string;
    type: BrokerTradeServerType;
    typeTitle: string;
    currencies: Array<string>;
    permissions: Array<TradingAccountPermission>;
    minimumDepositsAmount: { [key: string]: number; };
    isKycRequired: boolean;
    isCountryNotUSRequired: boolean;
    isSignalsAvailable: boolean;
    isDepositRequired: boolean;
}

