import { Currency } from './currency';
export declare class WalletDeposit {
    'currency'?: Currency;
    'depositAddress'?: string;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: WalletDeposit): WalletDeposit;
}
