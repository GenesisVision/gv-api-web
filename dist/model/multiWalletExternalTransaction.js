import { Currency } from './currency';
import { MultiWalletExternalTransactionType } from './multiWalletExternalTransactionType';
import ApiClient from "../ApiClient";
export class MultiWalletExternalTransaction {
    constructor() {
    }
    static constructFromObject(data, obj = new MultiWalletExternalTransaction()) {
        if (data) {
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'string');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = MultiWalletExternalTransactionType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'string');
            }
            if (data.hasOwnProperty('isEnableActions')) {
                obj['isEnableActions'] = ApiClient.convertToType(data['isEnableActions'], 'boolean');
            }
            if (data.hasOwnProperty('statusUrl')) {
                obj['statusUrl'] = ApiClient.convertToType(data['statusUrl'], 'string');
            }
        }
        return obj;
    }
}
