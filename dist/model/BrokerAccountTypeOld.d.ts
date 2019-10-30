import { BrokerTradeServerType } from './BrokerTradeServerType';
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
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: BrokerAccountTypeOld): BrokerAccountTypeOld;
}
