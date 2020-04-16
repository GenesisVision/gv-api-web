import { WalletData } from './WalletData';
import { WalletsGrandTotal } from './WalletsGrandTotal';

export interface WalletSummary {
    grandTotal: WalletsGrandTotal;
    wallets: Array<WalletData>;
}

