import { BrokerOld } from './brokerOld';
export declare class MigrationRequestOld {
    'dateCreate'?: Date;
    'newLeverage'?: number;
    'newBroker'?: BrokerOld;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: MigrationRequestOld): MigrationRequestOld;
}
