import { BrokerOld } from './brokerOld';
export declare class BrokersInfoOld {
    'brokers'?: [BrokerOld];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: BrokersInfoOld): BrokersInfoOld;
}
