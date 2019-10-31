import { CopyTradingAccountInfo } from './CopyTradingAccountInfo';
import ApiClient from "../ApiClient";
export class ItemsViewModelCopyTradingAccountInfo {
    constructor(data) {
        this['items'] = data['items'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        return new ItemsViewModelCopyTradingAccountInfo({
            'items': ApiClient.convertToType(data['items'], [CopyTradingAccountInfo]),
            'total': ApiClient.convertToType(data['total'], 'number'),
        });
    }
}
