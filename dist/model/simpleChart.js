import { Currency } from './currency';
import { SimpleChartPoint } from './simpleChartPoint';
import ApiClient from "../ApiClient";
export class SimpleChart {
    constructor() {
    }
    static constructFromObject(data, obj = new SimpleChart()) {
        if (data) {
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('chart')) {
                obj['chart'] = ApiClient.convertToType(data['chart'], [SimpleChartPoint]);
            }
        }
        return obj;
    }
}
