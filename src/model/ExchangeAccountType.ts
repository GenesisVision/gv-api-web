import { BrokerTradeServerType } from './BrokerTradeServerType';

export interface ExchangeAccountType {
    id: string;
    name: string;
    description: string;
    type: BrokerTradeServerType;
    currencies: Array<string>;
    minimumDepositsAmount: { [key: string]: number; };
    isKycRequired: boolean;
    isCountryNotUSRequired: boolean;
    isSignalsAvailable: boolean;
    isDepositRequired: boolean;
}

