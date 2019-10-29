import { WalletBaseData } from './walletBaseData';
import ApiClient from "../ApiClient";
export class WalletMultiAvailable {
    constructor() {
    }
    static constructFromObject(data, obj = new WalletMultiAvailable()) {
        if (data) {
            if (data.hasOwnProperty('wallets')) {
                obj['wallets'] = ApiClient.convertToType(data['wallets'], [WalletBaseData]);
            }
        }
        return obj;
    }
}
