import { SimpleChartPoint } from './SimpleChartPoint';
import ApiClient from "../ApiClient";
export class AbsoluteProfitChart {
    constructor(data) {
        this['profit'] = data['profit'];
        this['chart'] = data['chart'];
    }
    static constructFromObject(data) {
        if (data) {
            return new AbsoluteProfitChart({
                'profit': ApiClient.convertToType(data['profit'], 'number'),
                'chart': ApiClient.convertToType(data['chart'], [SimpleChartPoint]),
            });
        }
    }
}
