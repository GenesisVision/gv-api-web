import { BrokerTradeServerType } from './brokerTradeServerType';
export declare class BrokerAccountTypeOld {
    'id'?: string;
    'name'?: string;
    'description'?: string;
    'type'?: BrokerTradeServerType;
    'leverages'?: [number];
    'currencies'?: [string];
    'minimumDepositsAmount'?: {
        String: number;
    };
    'isForex'?: boolean;
    'isSignalsAvailable'?: boolean;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: BrokerAccountTypeOld): BrokerAccountTypeOld;
}
