import { BrokerOld } from './BrokerOld';
export declare class MigrationRequestOld {
    'dateCreate'?: Date;
    'newLeverage'?: number;
    'newBroker'?: BrokerOld;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: MigrationRequestOld): MigrationRequestOld;
}
