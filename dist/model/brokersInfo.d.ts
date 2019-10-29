import { Broker } from './broker';
export declare class BrokersInfo {
    'brokers'?: [Broker];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: BrokersInfo): BrokersInfo;
}
