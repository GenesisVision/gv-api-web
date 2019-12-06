import { WalletData } from './WalletData';
import { WalletsGrandTotal } from './WalletsGrandTotal';
import ApiClient from "../ApiClient";
export class WalletSummary {
    constructor(data) {
        this['grandTotal'] = data['grandTotal'];
        this['wallets'] = data['wallets'];
        this['payFeesWithGvt'] = data['payFeesWithGvt'];
    }
    static constructFromObject(data) {
        if (data) {
            return new WalletSummary({
                'grandTotal': WalletsGrandTotal.constructFromObject(data['grandTotal']),
                'wallets': ApiClient.convertToType(data['wallets'], [WalletData]),
                'payFeesWithGvt': ApiClient.convertToType(data['payFeesWithGvt'], 'boolean'),
            });
        }
    }
}
