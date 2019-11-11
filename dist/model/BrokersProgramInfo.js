import { Broker } from './Broker';
import ApiClient from "../ApiClient";
export class BrokersProgramInfo {
    constructor(data) {
        this['brokers'] = data['brokers'];
        this['currentAccountTypeId'] = data['currentAccountTypeId'];
    }
    static constructFromObject(data) {
        if (data) {
            return new BrokersProgramInfo({
                'brokers': ApiClient.convertToType(data['brokers'], [Broker]),
                'currentAccountTypeId': ApiClient.convertToType(data['currentAccountTypeId'], 'string'),
            });
        }
    }
}
