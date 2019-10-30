import { CopyTradingAccountInfo } from './CopyTradingAccountInfo';
import ApiClient from "../ApiClient";
export class ItemsViewModelCopyTradingAccountInfo {
    static constructFromObject(data, obj = new ItemsViewModelCopyTradingAccountInfo()) {
        if (data) {
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [CopyTradingAccountInfo]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}
