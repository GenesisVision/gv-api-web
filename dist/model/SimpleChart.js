import { Currency } from './Currency';
import { SimpleChartPoint } from './SimpleChartPoint';
import ApiClient from "../ApiClient";
export class SimpleChart {
    constructor(data) {
        this['currency'] = data['currency'];
        this['color'] = data['color'];
        this['chart'] = data['chart'];
    }
    static constructFromObject(data) {
        if (data) {
            return new SimpleChart({
                'currency': Currency.constructFromObject(data['currency']),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'chart': ApiClient.convertToType(data['chart'], [SimpleChartPoint]),
            });
        }
    }
}
