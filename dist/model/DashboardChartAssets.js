import { DashboardChartAsset } from './DashboardChartAsset';
import ApiClient from "../ApiClient";
export class DashboardChartAssets {
    constructor(data) {
        this['assets'] = data['assets'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DashboardChartAssets({
                'assets': ApiClient.convertToType(data['assets'], [DashboardChartAsset]),
            });
        }
    }
}
