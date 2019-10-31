import { WalletWithdrawalInfo } from './WalletWithdrawalInfo';
import ApiClient from "../ApiClient";
export class WithdrawalSummary {
    constructor(data) {
        this['availableToWithdrawal'] = data['availableToWithdrawal'];
        this['wallets'] = data['wallets'];
    }
    static constructFromObject(data) {
        return new WithdrawalSummary({
            'availableToWithdrawal': ApiClient.convertToType(data['availableToWithdrawal'], 'number'),
            'wallets': ApiClient.convertToType(data['wallets'], [WalletWithdrawalInfo]),
        });
    }
}
