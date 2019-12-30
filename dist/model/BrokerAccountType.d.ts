import { BrokerTradeServerType } from './BrokerTradeServerType';
export declare class BrokerAccountType {
    'id': string;
    'name': string;
    'description': string;
    'type': BrokerTradeServerType;
    'leverages': Array<number>;
    'currencies': Array<string>;
    'minimumDepositsAmount': {
        [key: string]: number;
    };
    'isKycRequired': boolean;
    'isSignalsAvailable': boolean;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): BrokerAccountType | undefined;
}
