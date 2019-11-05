import { DashboardAssetChart } from './DashboardAssetChart';
import ApiClient from "../ApiClient";
export class DashboardChart {
    constructor(data) {
        this['charts'] = data['charts'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DashboardChart({
                'charts': ApiClient.convertToType(data['charts'], [DashboardAssetChart]),
            });
        }
    }
}
