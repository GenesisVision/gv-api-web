import { FundInvestingDetailsList } from './FundInvestingDetailsList';
import ApiClient from "../ApiClient";
export class ItemsViewModelFundInvestingDetailsList {
    constructor(data) {
        this['items'] = data['items'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ItemsViewModelFundInvestingDetailsList({
                'items': ApiClient.convertToType(data['items'], [FundInvestingDetailsList]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
