import { MultiWalletTransaction } from './multiWalletTransaction';
import ApiClient from "../ApiClient";
export class MultiWalletTransactionsViewModel {
    constructor() {
    }
    static constructFromObject(data, obj = new MultiWalletTransactionsViewModel()) {
        if (data) {
            if (data.hasOwnProperty('transactions')) {
                obj['transactions'] = ApiClient.convertToType(data['transactions'], [MultiWalletTransaction]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}
