import { DashboardAsset } from './DashboardAsset';
import ApiClient from "../ApiClient";
export class DashboardAssets {
    constructor(data) {
        this['assets'] = data['assets'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DashboardAssets({
                'assets': ApiClient.convertToType(data['assets'], [DashboardAsset]),
            });
        }
    }
}
