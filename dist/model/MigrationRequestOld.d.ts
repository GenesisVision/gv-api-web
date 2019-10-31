import { BrokerOld } from './BrokerOld';
export declare class MigrationRequestOld {
    'dateCreate': Date;
    'newLeverage': number;
    'newBroker': BrokerOld;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): MigrationRequestOld | undefined;
}
