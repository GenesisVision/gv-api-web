import { FundDetailsList } from './fundDetailsList';
import ApiClient from "../ApiClient";
export class ItemsViewModelFundDetailsList {
    constructor() {
    }
    static constructFromObject(data, obj = new ItemsViewModelFundDetailsList()) {
        if (data) {
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [FundDetailsList]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}
