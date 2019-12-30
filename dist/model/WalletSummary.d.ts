import { WalletData } from './WalletData';
import { WalletsGrandTotal } from './WalletsGrandTotal';
export declare class WalletSummary {
    'grandTotal': WalletsGrandTotal;
    'wallets': Array<WalletData>;
    'payFeesWithGvt': boolean;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): WalletSummary | undefined;
}
