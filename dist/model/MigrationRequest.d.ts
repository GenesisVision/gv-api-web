import { Broker } from './Broker';
export declare class MigrationRequest {
    'dateCreate': Date;
    'newLeverage': number;
    'newBroker': Broker;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): MigrationRequest | undefined;
}
