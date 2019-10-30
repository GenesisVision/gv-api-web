import { WalletData } from './walletData';
import { WalletsGrandTotal } from './walletsGrandTotal';
export declare class WalletMultiSummary {
    'grandTotal'?: WalletsGrandTotal;
    'wallets'?: Array<WalletData>;
    'payFeesWithGvt'?: boolean;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: WalletMultiSummary): WalletMultiSummary;
}
