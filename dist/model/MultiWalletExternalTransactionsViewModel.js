import { MultiWalletExternalTransaction } from './MultiWalletExternalTransaction';
import ApiClient from "../ApiClient";
export class MultiWalletExternalTransactionsViewModel {
    constructor(data) {
        this['transactions'] = data['transactions'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        return new MultiWalletExternalTransactionsViewModel({
            'transactions': ApiClient.convertToType(data['transactions'], [MultiWalletExternalTransaction]),
            'total': ApiClient.convertToType(data['total'], 'number'),
        });
    }
}
