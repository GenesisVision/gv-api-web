import { Currency } from './currency';
import ApiClient from "../ApiClient";
export class WalletDeposit {
    constructor() {
    }
    static constructFromObject(data, obj = new WalletDeposit()) {
        if (data) {
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('depositAddress')) {
                obj['depositAddress'] = ApiClient.convertToType(data['depositAddress'], 'string');
            }
        }
        return obj;
    }
}
