import { SimpleChartPoint } from './simpleChartPoint';
import ApiClient from "../ApiClient";
export class ProfitChart {
    constructor() {
    }
    static constructFromObject(data, obj = new ProfitChart()) {
        if (data) {
            if (data.hasOwnProperty('chart')) {
                obj['chart'] = ApiClient.convertToType(data['chart'], [SimpleChartPoint]);
            }
            if (data.hasOwnProperty('profit')) {
                obj['profit'] = ApiClient.convertToType(data['profit'], 'number');
            }
            if (data.hasOwnProperty('drawdown')) {
                obj['drawdown'] = ApiClient.convertToType(data['drawdown'], 'number');
            }
        }
        return obj;
    }
}
