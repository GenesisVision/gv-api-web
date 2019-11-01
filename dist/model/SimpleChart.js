import { Currency } from './Currency';
import { SimpleChartPoint } from './SimpleChartPoint';
import ApiClient from "../ApiClient";
export class SimpleChart {
    constructor(data) {
        this['currency'] = data['currency'];
        this['chart'] = data['chart'];
    }
    static constructFromObject(data) {
        if (data) {
            return new SimpleChart({
                'currency': Currency.constructFromObject(data['currency']),
                'chart': ApiClient.convertToType(data['chart'], [SimpleChartPoint]),
            });
        }
    }
}
