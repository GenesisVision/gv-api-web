import { BrokerTradeServerType } from './brokerTradeServerType';
export declare class BrokerAccountType {
    'id'?: string;
    'name'?: string;
    'description'?: string;
    'type'?: BrokerTradeServerType;
    'leverages'?: [number];
    'currencies'?: [string];
    'minimumDepositsAmount'?: {
        String: number;
    };
    'isKycRequired'?: boolean;
    'isSignalsAvailable'?: boolean;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: BrokerAccountType): BrokerAccountType;
}
