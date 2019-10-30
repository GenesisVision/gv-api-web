import { WalletDeposit } from './walletDeposit';
import ApiClient from "../ApiClient";
export class WalletDepositSummary {
    constructor() {
    }
    static constructFromObject(data, obj = new WalletDepositSummary()) {
        if (data) {
            if (data.hasOwnProperty('wallets')) {
                obj['wallets'] = ApiClient.convertToType(data['wallets'], [WalletDeposit]);
            }
        }
        return obj;
    }
}
