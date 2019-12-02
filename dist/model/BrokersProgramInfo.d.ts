import { Broker } from './Broker';
export declare class BrokersProgramInfo {
    'brokers': Array<Broker>;
    'currentAccountTypeId': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): BrokersProgramInfo | undefined;
}
