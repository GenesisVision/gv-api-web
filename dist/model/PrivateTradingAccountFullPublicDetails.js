import { DashboardTradingAssetStatus } from './DashboardTradingAssetStatus';
import ApiClient from "../ApiClient";
export class PrivateTradingAccountFullPublicDetails {
    constructor(data) {
        this['title'] = data['title'];
        this['creationDate'] = data['creationDate'];
        this['status'] = data['status'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PrivateTradingAccountFullPublicDetails({
                'title': ApiClient.convertToType(data['title'], 'string'),
                'creationDate': ApiClient.convertToType(data['creationDate'], 'Date'),
                'status': DashboardTradingAssetStatus.constructFromObject(data['status']),
            });
        }
    }
}
