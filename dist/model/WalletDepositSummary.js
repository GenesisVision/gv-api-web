import { WalletDeposit } from './WalletDeposit';
import ApiClient from "../ApiClient";
export class WalletDepositSummary {
    static constructFromObject(data, obj = new WalletDepositSummary()) {
        if (data) {
            if (data.hasOwnProperty('wallets')) {
                obj['wallets'] = ApiClient.convertToType(data['wallets'], [WalletDeposit]);
            }
        }
        return obj;
    }
}
