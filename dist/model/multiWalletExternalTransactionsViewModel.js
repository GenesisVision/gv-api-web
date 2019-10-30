import { MultiWalletExternalTransaction } from './multiWalletExternalTransaction';
import ApiClient from "../ApiClient";
export class MultiWalletExternalTransactionsViewModel {
    constructor() {
    }
    static constructFromObject(data, obj = new MultiWalletExternalTransactionsViewModel()) {
        if (data) {
            if (data.hasOwnProperty('transactions')) {
                obj['transactions'] = ApiClient.convertToType(data['transactions'], [MultiWalletExternalTransaction]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}
