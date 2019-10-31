import { MoneyLocationType } from './MoneyLocationType';
import ApiClient from "../ApiClient";
export class MoneyLocation {
    constructor(data) {
        this['type'] = data['type'];
        this['percent'] = data['percent'];
    }
    static constructFromObject(data) {
        if (data) {
            return new MoneyLocation({
                'type': MoneyLocationType.constructFromObject(data['type']),
                'percent': ApiClient.convertToType(data['percent'], 'number'),
            });
        }
    }
}
