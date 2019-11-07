import ApiClient from "../ApiClient";
export class DashboardTradingAssetCommonDetails {
    constructor(data) {
        this['creationDate'] = data['creationDate'];
        this['balance'] = data['balance'];
        this['login'] = data['login'];
        this['currency'] = data['currency'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DashboardTradingAssetCommonDetails({
                'creationDate': ApiClient.convertToType(data['creationDate'], 'Date'),
                'balance': ApiClient.convertToType(data['balance'], 'number'),
                'login': ApiClient.convertToType(data['login'], 'string'),
                'currency': ApiClient.convertToType(data['currency'], 'string'),
            });
        }
    }
}
