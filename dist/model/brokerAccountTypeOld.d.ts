import { BrokerTradeServerType } from './brokerTradeServerType';
export declare class BrokerAccountTypeOld {
    'id'?: string;
    'name'?: string;
    'description'?: string;
    'type'?: BrokerTradeServerType;
    'leverages'?: Array<number>;
    'currencies'?: Array<string>;
    'minimumDepositsAmount'?: {
        [key: string]: number;
    };
    'isForex'?: boolean;
    'isSignalsAvailable'?: boolean;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: BrokerAccountTypeOld): BrokerAccountTypeOld;
}
