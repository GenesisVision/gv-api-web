import { BrokerTradeServerType } from './BrokerTradeServerType';

export interface ExchangeAccountType {
    id: string;
    name: string;
    description: string;
    type: BrokerTradeServerType;
    minimumDepositsAmount: { [key: string]: number; };
    isKycRequired: boolean;
    isCountryNotUSRequired: boolean;
    isSignalsAvailable: boolean;
    isDepositRequired: boolean;
}

