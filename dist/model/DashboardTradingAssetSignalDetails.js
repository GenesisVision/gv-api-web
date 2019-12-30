import ApiClient from "../ApiClient";
export class DashboardTradingAssetSignalDetails {
    constructor(data) {
        this['subscribersCount'] = data['subscribersCount'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DashboardTradingAssetSignalDetails({
                'subscribersCount': ApiClient.convertToType(data['subscribersCount'], 'number'),
            });
        }
    }
}
