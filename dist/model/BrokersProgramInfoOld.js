import { BrokerOld } from './BrokerOld';
import ApiClient from "../ApiClient";
export class BrokersProgramInfoOld {
    constructor(data) {
        this['brokers'] = data['brokers'];
        this['currentAccountTypeId'] = data['currentAccountTypeId'];
    }
    static constructFromObject(data) {
        return new BrokersProgramInfoOld({
            'brokers': ApiClient.convertToType(data['brokers'], [BrokerOld]),
            'currentAccountTypeId': ApiClient.convertToType(data['currentAccountTypeId'], 'string'),
        });
    }
}
