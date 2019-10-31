import { Currency } from './Currency';
import { MultiWalletTransactionStatus } from './MultiWalletTransactionStatus';
import { MultiWalletTransactionType } from './MultiWalletTransactionType';
import ApiClient from "../ApiClient";
export class MultiWalletTransaction {
    constructor(data) {
        this['id'] = data['id'];
        this['currencyFrom'] = data['currencyFrom'];
        this['currencyTo'] = data['currencyTo'];
        this['type'] = data['type'];
        this['date'] = data['date'];
        this['status'] = data['status'];
        this['logoFrom'] = data['logoFrom'];
        this['logoTo'] = data['logoTo'];
        this['description'] = data['description'];
        this['amount'] = data['amount'];
        this['amountTo'] = data['amountTo'];
    }
    static constructFromObject(data) {
        return new MultiWalletTransaction({
            'id': ApiClient.convertToType(data['id'], 'string'),
            'currencyFrom': Currency.constructFromObject(data['currencyFrom']),
            'currencyTo': ApiClient.convertToType(data['currencyTo'], 'string'),
            'type': MultiWalletTransactionType.constructFromObject(data['type']),
            'date': ApiClient.convertToType(data['date'], 'Date'),
            'status': MultiWalletTransactionStatus.constructFromObject(data['status']),
            'logoFrom': ApiClient.convertToType(data['logoFrom'], 'string'),
            'logoTo': ApiClient.convertToType(data['logoTo'], 'string'),
            'description': ApiClient.convertToType(data['description'], 'string'),
            'amount': ApiClient.convertToType(data['amount'], 'number'),
            'amountTo': ApiClient.convertToType(data['amountTo'], 'number'),
        });
    }
}
