import { BrokerOld } from './brokerOld';
export declare class BrokersProgramInfoOld {
    'brokers'?: Array<BrokerOld>;
    'currentAccountTypeId'?: string;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: BrokersProgramInfoOld): BrokersProgramInfoOld;
}
