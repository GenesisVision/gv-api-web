import { Currency } from './Currency';
export declare class WalletsGrandTotal {
    'currency': Currency;
    'available': number;
    'invested': number;
    'trading': number;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): WalletsGrandTotal | undefined;
}
