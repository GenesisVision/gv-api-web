import { Broker } from './Broker';

export interface MigrationRequest {
    dateCreate: Date;
    newLeverage: number;
    newBroker: Broker;
}

