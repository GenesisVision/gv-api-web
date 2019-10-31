import { BrokerOld } from './BrokerOld';
export declare class BrokersInfoOld {
    'brokers': Array<BrokerOld>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): BrokersInfoOld | undefined;
}
