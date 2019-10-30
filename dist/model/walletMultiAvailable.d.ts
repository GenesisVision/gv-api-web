import { WalletBaseData } from './walletBaseData';
export declare class WalletMultiAvailable {
    'wallets'?: [WalletBaseData];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: WalletMultiAvailable): WalletMultiAvailable;
}
