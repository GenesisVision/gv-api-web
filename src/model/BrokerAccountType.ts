import { BrokerTradeServerType } from './BrokerTradeServerType';

export interface BrokerAccountType {
    id: string;
    name: string;
    description: string;
    type: BrokerTradeServerType;
    leverages: Array<number>;
    currencies: Array<string>;
    minimumDepositsAmount: { [key: string]: number; };
    isKycRequired: boolean;
    isSignalsAvailable: boolean;
    isDepositRequired: boolean;
}

