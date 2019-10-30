import { WalletDeposit } from './walletDeposit';
export declare class WalletDepositSummary {
    'wallets'?: Array<WalletDeposit>;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: WalletDepositSummary): WalletDepositSummary;
}
