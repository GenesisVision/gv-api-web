import { CopyTradingDetailsList } from './CopyTradingDetailsList';
import ApiClient from "../ApiClient";
export class ItemsViewModelCopyTradingDetailsList {
    constructor(data) {
        this['items'] = data['items'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ItemsViewModelCopyTradingDetailsList({
                'items': ApiClient.convertToType(data['items'], [CopyTradingDetailsList]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
