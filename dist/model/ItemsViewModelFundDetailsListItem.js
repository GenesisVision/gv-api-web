import { FundDetailsListItem } from './FundDetailsListItem';
import ApiClient from "../ApiClient";
export class ItemsViewModelFundDetailsListItem {
    constructor(data) {
        this['items'] = data['items'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ItemsViewModelFundDetailsListItem({
                'items': ApiClient.convertToType(data['items'], [FundDetailsListItem]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
