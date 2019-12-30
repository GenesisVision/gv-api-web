import { Currency } from './Currency';
export declare class WalletBaseData {
    'id': string;
    'title': string;
    'logo': string;
    'currency': Currency;
    'available': number;
    'rate': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): WalletBaseData | undefined;
}
