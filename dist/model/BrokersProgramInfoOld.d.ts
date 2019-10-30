import { BrokerOld } from './BrokerOld';
export declare class BrokersProgramInfoOld {
    'brokers'?: Array<BrokerOld>;
    'currentAccountTypeId'?: string;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: BrokersProgramInfoOld): BrokersProgramInfoOld;
}
