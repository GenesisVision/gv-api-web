import { Broker } from './Broker';
import ApiClient from "../ApiClient";
export class BrokersInfo {
    constructor(data) {
        this['brokers'] = data['brokers'];
    }
    static constructFromObject(data) {
        if (data) {
            return new BrokersInfo({
                'brokers': ApiClient.convertToType(data['brokers'], [Broker]),
            });
        }
    }
}
