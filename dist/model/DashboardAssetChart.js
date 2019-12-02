import { SimpleChartPoint } from './SimpleChartPoint';
import ApiClient from "../ApiClient";
export class DashboardAssetChart {
    constructor(data) {
        this['assetId'] = data['assetId'];
        this['color'] = data['color'];
        this['chart'] = data['chart'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DashboardAssetChart({
                'assetId': ApiClient.convertToType(data['assetId'], 'string'),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'chart': ApiClient.convertToType(data['chart'], [SimpleChartPoint]),
            });
        }
    }
}
