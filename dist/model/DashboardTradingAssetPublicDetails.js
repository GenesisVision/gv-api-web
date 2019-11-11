import ApiClient from "../ApiClient";
export class DashboardTradingAssetPublicDetails {
    constructor(data) {
        this['logo'] = data['logo'];
        this['color'] = data['color'];
        this['title'] = data['title'];
        this['url'] = data['url'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DashboardTradingAssetPublicDetails({
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
            });
        }
    }
}
