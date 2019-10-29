import { Broker } from './broker';
export declare class BrokersProgramInfo {
    'brokers'?: [Broker];
    'currentAccountTypeId'?: string;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: BrokersProgramInfo): BrokersProgramInfo;
}
