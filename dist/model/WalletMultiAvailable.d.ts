import { WalletBaseData } from './WalletBaseData';
export declare class WalletMultiAvailable {
    'wallets': Array<WalletBaseData>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): WalletMultiAvailable;
}
