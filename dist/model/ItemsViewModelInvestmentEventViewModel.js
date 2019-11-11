import { InvestmentEventViewModel } from './InvestmentEventViewModel';
import ApiClient from "../ApiClient";
export class ItemsViewModelInvestmentEventViewModel {
    constructor(data) {
        this['items'] = data['items'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ItemsViewModelInvestmentEventViewModel({
                'items': ApiClient.convertToType(data['items'], [InvestmentEventViewModel]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
