import { Currency } from './currency';
import { MultiWalletTransactionStatus } from './multiWalletTransactionStatus';
import { MultiWalletTransactionType } from './multiWalletTransactionType';
import ApiClient from "../ApiClient";
export class MultiWalletTransaction {
    constructor() {
    }
    static constructFromObject(data, obj = new MultiWalletTransaction()) {
        if (data) {
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('currencyFrom')) {
                obj['currencyFrom'] = Currency.constructFromObject(data['currencyFrom']);
            }
            if (data.hasOwnProperty('currencyTo')) {
                obj['currencyTo'] = ApiClient.convertToType(data['currencyTo'], 'string');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = MultiWalletTransactionType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = MultiWalletTransactionStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('logoFrom')) {
                obj['logoFrom'] = ApiClient.convertToType(data['logoFrom'], 'string');
            }
            if (data.hasOwnProperty('logoTo')) {
                obj['logoTo'] = ApiClient.convertToType(data['logoTo'], 'string');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'string');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'number');
            }
            if (data.hasOwnProperty('amountTo')) {
                obj['amountTo'] = ApiClient.convertToType(data['amountTo'], 'number');
            }
        }
        return obj;
    }
}
