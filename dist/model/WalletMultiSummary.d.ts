import { WalletData } from './WalletData';
import { WalletsGrandTotal } from './WalletsGrandTotal';
export declare class WalletMultiSummary {
    'grandTotal'?: WalletsGrandTotal;
    'wallets'?: Array<WalletData>;
    'payFeesWithGvt'?: boolean;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: WalletMultiSummary): WalletMultiSummary;
}
