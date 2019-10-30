import { WalletWithdrawalInfo } from './WalletWithdrawalInfo';
import ApiClient from "../ApiClient";
export class WithdrawalSummary {
    static constructFromObject(data, obj = new WithdrawalSummary()) {
        if (data) {
            if (data.hasOwnProperty('availableToWithdrawal')) {
                obj['availableToWithdrawal'] = ApiClient.convertToType(data['availableToWithdrawal'], 'number');
            }
            if (data.hasOwnProperty('wallets')) {
                obj['wallets'] = ApiClient.convertToType(data['wallets'], [WalletWithdrawalInfo]);
            }
        }
        return obj;
    }
}
