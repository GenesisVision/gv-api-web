import { BrokerOld } from './brokerOld';
export declare class BrokersInfoOld {
    'brokers'?: Array<BrokerOld>;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: BrokersInfoOld): BrokersInfoOld;
}
