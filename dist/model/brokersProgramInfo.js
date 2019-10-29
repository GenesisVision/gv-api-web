import { Broker } from './broker';
import ApiClient from "../ApiClient";
export class BrokersProgramInfo {
    constructor() {
    }
    static constructFromObject(data, obj = new BrokersProgramInfo()) {
        if (data) {
            if (data.hasOwnProperty('brokers')) {
                obj['brokers'] = ApiClient.convertToType(data['brokers'], [Broker]);
            }
            if (data.hasOwnProperty('currentAccountTypeId')) {
                obj['currentAccountTypeId'] = ApiClient.convertToType(data['currentAccountTypeId'], 'string');
            }
        }
        return obj;
    }
}
