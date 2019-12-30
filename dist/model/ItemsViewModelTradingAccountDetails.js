import { TradingAccountDetails } from './TradingAccountDetails';
import ApiClient from "../ApiClient";
export class ItemsViewModelTradingAccountDetails {
    constructor(data) {
        this['items'] = data['items'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ItemsViewModelTradingAccountDetails({
                'items': ApiClient.convertToType(data['items'], [TradingAccountDetails]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
