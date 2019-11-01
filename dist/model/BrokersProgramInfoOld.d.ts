import { BrokerOld } from './BrokerOld';
export declare class BrokersProgramInfoOld {
    'brokers': Array<BrokerOld>;
    'currentAccountTypeId': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): BrokersProgramInfoOld | undefined;
}
