import { WalletDeposit } from './WalletDeposit';
export declare class WalletDepositSummary {
    'wallets': Array<WalletDeposit>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): WalletDepositSummary | undefined;
}
