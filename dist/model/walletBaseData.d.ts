import { Currency } from './currency';
export declare class WalletBaseData {
    'id'?: string;
    'title'?: string;
    'logo'?: string;
    'currency'?: Currency;
    'available'?: number;
    'rate'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: WalletBaseData): WalletBaseData;
}
