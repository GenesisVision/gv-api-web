import { WalletBaseData } from './WalletBaseData';
export declare class WalletMultiAvailable {
    'wallets'?: Array<WalletBaseData>;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: WalletMultiAvailable): WalletMultiAvailable;
}
