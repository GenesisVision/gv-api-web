import { Broker } from './broker';
import ApiClient from "../ApiClient";
export class BrokersInfo {
    constructor() {
    }
    static constructFromObject(data, obj = new BrokersInfo()) {
        if (data) {
            if (data.hasOwnProperty('brokers')) {
                obj['brokers'] = ApiClient.convertToType(data['brokers'], [Broker]);
            }
        }
        return obj;
    }
}
