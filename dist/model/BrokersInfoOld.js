import { BrokerOld } from './BrokerOld';
import ApiClient from "../ApiClient";
export class BrokersInfoOld {
    constructor(data) {
        this['brokers'] = data['brokers'];
    }
    static constructFromObject(data) {
        return new BrokersInfoOld({
            'brokers': ApiClient.convertToType(data['brokers'], [BrokerOld]),
        });
    }
}
