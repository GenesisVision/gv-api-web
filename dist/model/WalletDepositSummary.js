import { WalletDeposit } from './WalletDeposit';
import ApiClient from "../ApiClient";
export class WalletDepositSummary {
    constructor(data) {
        this['wallets'] = data['wallets'];
    }
    static constructFromObject(data) {
        return new WalletDepositSummary({
            'wallets': ApiClient.convertToType(data['wallets'], [WalletDeposit]),
        });
    }
}
