import { Currency } from './Currency';
export declare class WalletDeposit {
    'currency': Currency;
    'depositAddress': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): WalletDeposit;
}
