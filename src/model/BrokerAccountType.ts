import { BrokerTradeServerType } from './BrokerTradeServerType';

export interface BrokerAccountType {
    id: string;
    name: string;
    description: string;
    type: BrokerTradeServerType;
    typeTitle: string;
    leverages: Array<number>;
    currencies: Array<string>;
    minimumDepositsAmount: { [key: string]: number; };
    isKycRequired: boolean;
    isCountryNotUSRequired: boolean;
    isSignalsAvailable: boolean;
    isDepositRequired: boolean;
}

