import { WalletDeposit } from './WalletDeposit';
export declare class WalletDepositSummary {
    'wallets'?: Array<WalletDeposit>;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: WalletDepositSummary): WalletDepositSummary;
}
