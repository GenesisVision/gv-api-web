import { WalletBaseData } from './WalletBaseData';
import ApiClient from "../ApiClient";
export class WalletMultiAvailable {
    static constructFromObject(data, obj = new WalletMultiAvailable()) {
        if (data) {
            if (data.hasOwnProperty('wallets')) {
                obj['wallets'] = ApiClient.convertToType(data['wallets'], [WalletBaseData]);
            }
        }
        return obj;
    }
}
