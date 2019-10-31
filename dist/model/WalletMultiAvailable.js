import { WalletBaseData } from './WalletBaseData';
import ApiClient from "../ApiClient";
export class WalletMultiAvailable {
    constructor(data) {
        this['wallets'] = data['wallets'];
    }
    static constructFromObject(data) {
        if (data) {
            return new WalletMultiAvailable({
                'wallets': ApiClient.convertToType(data['wallets'], [WalletBaseData]),
            });
        }
    }
}
