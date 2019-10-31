import { TransactionViewModel } from './TransactionViewModel';
import ApiClient from "../ApiClient";
export class TransactionsViewModel {
    constructor(data) {
        this['transactions'] = data['transactions'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new TransactionsViewModel({
                'transactions': ApiClient.convertToType(data['transactions'], [TransactionViewModel]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
