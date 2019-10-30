import { BrokerOld } from './BrokerOld';
import ApiClient from "../ApiClient";
export class MigrationRequestOld {
    static constructFromObject(data, obj = new MigrationRequestOld()) {
        if (data) {
            if (data.hasOwnProperty('dateCreate')) {
                obj['dateCreate'] = ApiClient.convertToType(data['dateCreate'], 'Date');
            }
            if (data.hasOwnProperty('newLeverage')) {
                obj['newLeverage'] = ApiClient.convertToType(data['newLeverage'], 'number');
            }
            if (data.hasOwnProperty('newBroker')) {
                obj['newBroker'] = BrokerOld.constructFromObject(data['newBroker']);
            }
        }
        return obj;
    }
}
