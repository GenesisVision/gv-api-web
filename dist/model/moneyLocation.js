import { MoneyLocationType } from './moneyLocationType';
import ApiClient from "../ApiClient";
export class MoneyLocation {
    constructor() {
    }
    static constructFromObject(data, obj = new MoneyLocation()) {
        if (data) {
            if (data.hasOwnProperty('type')) {
                obj['type'] = MoneyLocationType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('percent')) {
                obj['percent'] = ApiClient.convertToType(data['percent'], 'number');
            }
        }
        return obj;
    }
}
