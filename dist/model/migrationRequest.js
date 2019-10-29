import { Broker } from './broker';
import ApiClient from "../ApiClient";
export class MigrationRequest {
    constructor() {
    }
    static constructFromObject(data, obj = new MigrationRequest()) {
        if (data) {
            if (data.hasOwnProperty('dateCreate')) {
                obj['dateCreate'] = ApiClient.convertToType(data['dateCreate'], 'Date');
            }
            if (data.hasOwnProperty('newLeverage')) {
                obj['newLeverage'] = ApiClient.convertToType(data['newLeverage'], 'number');
            }
            if (data.hasOwnProperty('newBroker')) {
                obj['newBroker'] = Broker.constructFromObject(data['newBroker']);
            }
        }
        return obj;
    }
}
