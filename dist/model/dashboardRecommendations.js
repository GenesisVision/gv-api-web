import { RecommendedAsset } from './recommendedAsset';
import ApiClient from "../ApiClient";
export class DashboardRecommendations {
    constructor() {
    }
    static constructFromObject(data, obj = new DashboardRecommendations()) {
        if (data) {
            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], [RecommendedAsset]);
            }
        }
        return obj;
    }
}
