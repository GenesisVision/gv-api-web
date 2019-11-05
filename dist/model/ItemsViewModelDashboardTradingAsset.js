import { DashboardTradingAsset } from './DashboardTradingAsset';
import ApiClient from "../ApiClient";
export class ItemsViewModelDashboardTradingAsset {
    constructor(data) {
        this['items'] = data['items'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ItemsViewModelDashboardTradingAsset({
                'items': ApiClient.convertToType(data['items'], [DashboardTradingAsset]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
