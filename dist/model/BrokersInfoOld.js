import { BrokerOld } from './BrokerOld';
import ApiClient from "../ApiClient";
export class BrokersInfoOld {
    static constructFromObject(data, obj = new BrokersInfoOld()) {
        if (data) {
            if (data.hasOwnProperty('brokers')) {
                obj['brokers'] = ApiClient.convertToType(data['brokers'], [BrokerOld]);
            }
        }
        return obj;
    }
}
