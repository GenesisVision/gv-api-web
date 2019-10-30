import { BrokerOld } from './BrokerOld';
import ApiClient from "../ApiClient";
export class BrokersProgramInfoOld {
    static constructFromObject(data, obj = new BrokersProgramInfoOld()) {
        if (data) {
            if (data.hasOwnProperty('brokers')) {
                obj['brokers'] = ApiClient.convertToType(data['brokers'], [BrokerOld]);
            }
            if (data.hasOwnProperty('currentAccountTypeId')) {
                obj['currentAccountTypeId'] = ApiClient.convertToType(data['currentAccountTypeId'], 'string');
            }
        }
        return obj;
    }
}
