import { BrokerOld } from './BrokerOld';
export declare class BrokersInfoOld {
    'brokers'?: Array<BrokerOld>;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: BrokersInfoOld): BrokersInfoOld;
}
