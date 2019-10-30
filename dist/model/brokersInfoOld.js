import { BrokerOld } from './brokerOld';
import ApiClient from "../ApiClient";
export class BrokersInfoOld {
    constructor() {
    }
    static constructFromObject(data, obj = new BrokersInfoOld()) {
        if (data) {
            if (data.hasOwnProperty('brokers')) {
                obj['brokers'] = ApiClient.convertToType(data['brokers'], [BrokerOld]);
            }
        }
        return obj;
    }
}
