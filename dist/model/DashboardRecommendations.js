import { RecommendedAsset } from './RecommendedAsset';
import ApiClient from "../ApiClient";
export class DashboardRecommendations {
    constructor(data) {
        this['assets'] = data['assets'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DashboardRecommendations({
                'assets': ApiClient.convertToType(data['assets'], [RecommendedAsset]),
            });
        }
    }
}
