import { TransactionViewModel } from './TransactionViewModel';
import ApiClient from "../ApiClient";
export class ItemsViewModelTransactionViewModel {
    constructor(data) {
        this['items'] = data['items'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ItemsViewModelTransactionViewModel({
                'items': ApiClient.convertToType(data['items'], [TransactionViewModel]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
