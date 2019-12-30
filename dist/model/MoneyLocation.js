import { MoneyLocationType } from './MoneyLocationType';
import ApiClient from "../ApiClient";
export class MoneyLocation {
    constructor(data) {
        this['name'] = data['name'];
        this['percent'] = data['percent'];
        this['color'] = data['color'];
    }
    static constructFromObject(data) {
        if (data) {
            return new MoneyLocation({
                'name': MoneyLocationType.constructFromObject(data['name']),
                'percent': ApiClient.convertToType(data['percent'], 'number'),
                'color': ApiClient.convertToType(data['color'], 'string'),
            });
        }
    }
}
