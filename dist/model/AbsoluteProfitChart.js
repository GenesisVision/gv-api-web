import { SimpleChartPoint } from './SimpleChartPoint';
import ApiClient from "../ApiClient";
export class AbsoluteProfitChart {
    constructor(data) {
        this['chart'] = data['chart'];
    }
    static constructFromObject(data) {
        if (data) {
            return new AbsoluteProfitChart({
                'chart': ApiClient.convertToType(data['chart'], [SimpleChartPoint]),
            });
        }
    }
}
