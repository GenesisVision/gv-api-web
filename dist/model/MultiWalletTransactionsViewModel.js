import { MultiWalletTransaction } from './MultiWalletTransaction';
import ApiClient from "../ApiClient";
export class MultiWalletTransactionsViewModel {
    constructor(data) {
        this['transactions'] = data['transactions'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        return new MultiWalletTransactionsViewModel({
            'transactions': ApiClient.convertToType(data['transactions'], [MultiWalletTransaction]),
            'total': ApiClient.convertToType(data['total'], 'number'),
        });
    }
}
