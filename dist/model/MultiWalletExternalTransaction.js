import { Currency } from './Currency';
import { MultiWalletExternalTransactionType } from './MultiWalletExternalTransactionType';
import ApiClient from "../ApiClient";
export class MultiWalletExternalTransaction {
    constructor(data) {
        this['id'] = data['id'];
        this['currency'] = data['currency'];
        this['logo'] = data['logo'];
        this['date'] = data['date'];
        this['amount'] = data['amount'];
        this['type'] = data['type'];
        this['status'] = data['status'];
        this['isEnableActions'] = data['isEnableActions'];
        this['statusUrl'] = data['statusUrl'];
    }
    static constructFromObject(data) {
        return new MultiWalletExternalTransaction({
            'id': ApiClient.convertToType(data['id'], 'string'),
            'currency': Currency.constructFromObject(data['currency']),
            'logo': ApiClient.convertToType(data['logo'], 'string'),
            'date': ApiClient.convertToType(data['date'], 'Date'),
            'amount': ApiClient.convertToType(data['amount'], 'number'),
            'type': MultiWalletExternalTransactionType.constructFromObject(data['type']),
            'status': ApiClient.convertToType(data['status'], 'string'),
            'isEnableActions': ApiClient.convertToType(data['isEnableActions'], 'boolean'),
            'statusUrl': ApiClient.convertToType(data['statusUrl'], 'string'),
        });
    }
}
