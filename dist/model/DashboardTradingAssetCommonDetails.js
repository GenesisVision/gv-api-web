import { DashboardTradingAssetStatus } from './DashboardTradingAssetStatus';
import ApiClient from "../ApiClient";
export class DashboardTradingAssetCommonDetails {
    constructor(data) {
        this['title'] = data['title'];
        this['status'] = data['status'];
        this['creationDate'] = data['creationDate'];
        this['balance'] = data['balance'];
        this['login'] = data['login'];
        this['currency'] = data['currency'];
        this['leverage'] = data['leverage'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DashboardTradingAssetCommonDetails({
                'title': ApiClient.convertToType(data['title'], 'string'),
                'status': DashboardTradingAssetStatus.constructFromObject(data['status']),
                'creationDate': ApiClient.convertToType(data['creationDate'], 'Date'),
                'balance': ApiClient.convertToType(data['balance'], 'number'),
                'login': ApiClient.convertToType(data['login'], 'string'),
                'currency': ApiClient.convertToType(data['currency'], 'string'),
                'leverage': ApiClient.convertToType(data['leverage'], 'number'),
            });
        }
    }
}
