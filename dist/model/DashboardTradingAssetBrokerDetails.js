import { BrokerTradeServerType } from './BrokerTradeServerType';
import ApiClient from "../ApiClient";
export class DashboardTradingAssetBrokerDetails {
    constructor(data) {
        this['id'] = data['id'];
        this['logo'] = data['logo'];
        this['name'] = data['name'];
        this['type'] = data['type'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DashboardTradingAssetBrokerDetails({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'name': ApiClient.convertToType(data['name'], 'string'),
                'type': BrokerTradeServerType.constructFromObject(data['type']),
            });
        }
    }
}
