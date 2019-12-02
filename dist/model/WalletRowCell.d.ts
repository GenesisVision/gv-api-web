import { CurrencyItem } from './CurrencyItem';
export declare class WalletRowCell {
    'first': CurrencyItem;
    'second': CurrencyItem;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): WalletRowCell | undefined;
}
