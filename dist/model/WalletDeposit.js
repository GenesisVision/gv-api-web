import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class WalletDeposit {
    constructor(data) {
        this['currency'] = data['currency'];
        this['depositAddress'] = data['depositAddress'];
    }
    static constructFromObject(data) {
        return new WalletDeposit({
            'currency': Currency.constructFromObject(data['currency']),
            'depositAddress': ApiClient.convertToType(data['depositAddress'], 'string'),
        });
    }
}
