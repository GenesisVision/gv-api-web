import { FundDetailsList } from './FundDetailsList';
import ApiClient from "../ApiClient";
export class ItemsViewModelFundDetailsList {
    constructor(data) {
        this['items'] = data['items'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ItemsViewModelFundDetailsList({
                'items': ApiClient.convertToType(data['items'], [FundDetailsList]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
