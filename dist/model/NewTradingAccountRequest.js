import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class NewTradingAccountRequest {
    constructor(data) {
        this['depositAmount'] = data['depositAmount'];
        this['depositWalletId'] = data['depositWalletId'];
        this['currency'] = data['currency'];
        this['leverage'] = data['leverage'];
        this['brokerAccountTypeId'] = data['brokerAccountTypeId'];
    }
    static constructFromObject(data) {
        if (data) {
            return new NewTradingAccountRequest({
                'depositAmount': ApiClient.convertToType(data['depositAmount'], 'number'),
                'depositWalletId': ApiClient.convertToType(data['depositWalletId'], 'string'),
                'currency': Currency.constructFromObject(data['currency']),
                'leverage': ApiClient.convertToType(data['leverage'], 'number'),
                'brokerAccountTypeId': ApiClient.convertToType(data['brokerAccountTypeId'], 'string'),
            });
        }
    }
}
