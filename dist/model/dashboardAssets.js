import { DashboardAsset } from './dashboardAsset';
import ApiClient from "../ApiClient";
export class DashboardAssets {
    constructor() {
    }
    static constructFromObject(data, obj = new DashboardAssets()) {
        if (data) {
            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], [DashboardAsset]);
            }
            if (data.hasOwnProperty('othersPercent')) {
                obj['othersPercent'] = ApiClient.convertToType(data['othersPercent'], 'number');
            }
        }
        return obj;
    }
}
