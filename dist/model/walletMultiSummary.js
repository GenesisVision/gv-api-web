import { WalletData } from './walletData';
import { WalletsGrandTotal } from './walletsGrandTotal';
import ApiClient from "../ApiClient";
export class WalletMultiSummary {
    constructor() {
    }
    static constructFromObject(data, obj = new WalletMultiSummary()) {
        if (data) {
            if (data.hasOwnProperty('grandTotal')) {
                obj['grandTotal'] = WalletsGrandTotal.constructFromObject(data['grandTotal']);
            }
            if (data.hasOwnProperty('wallets')) {
                obj['wallets'] = ApiClient.convertToType(data['wallets'], [WalletData]);
            }
            if (data.hasOwnProperty('payFeesWithGvt')) {
                obj['payFeesWithGvt'] = ApiClient.convertToType(data['payFeesWithGvt'], 'boolean');
            }
        }
        return obj;
    }
}
