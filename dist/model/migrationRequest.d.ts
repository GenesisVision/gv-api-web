import { Broker } from './broker';
export declare class MigrationRequest {
    'dateCreate'?: Date;
    'newLeverage'?: number;
    'newBroker'?: Broker;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: MigrationRequest): MigrationRequest;
}
