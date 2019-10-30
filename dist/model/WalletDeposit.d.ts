import { Currency } from './Currency';
export declare class WalletDeposit {
    'currency'?: Currency;
    'depositAddress'?: string;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: WalletDeposit): WalletDeposit;
}
