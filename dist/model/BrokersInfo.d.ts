import { Broker } from './Broker';
export declare class BrokersInfo {
    'brokers': Array<Broker>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): BrokersInfo | undefined;
}
