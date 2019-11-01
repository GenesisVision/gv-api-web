import { SimpleChartPoint } from './SimpleChartPoint';
import ApiClient from "../ApiClient";
export class ProfitChart {
    constructor(data) {
        this['chart'] = data['chart'];
        this['profit'] = data['profit'];
        this['drawdown'] = data['drawdown'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProfitChart({
                'chart': ApiClient.convertToType(data['chart'], [SimpleChartPoint]),
                'profit': ApiClient.convertToType(data['profit'], 'number'),
                'drawdown': ApiClient.convertToType(data['drawdown'], 'number'),
            });
        }
    }
}
