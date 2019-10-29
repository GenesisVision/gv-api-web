import { Currency } from './currency';
export declare class WalletsGrandTotal {
    'currency'?: Currency;
    'available'?: number;
    'invested'?: number;
    'pending'?: number;
    'total'?: number;
    'currencyCcy'?: Currency;
    'availableCcy'?: number;
    'investedCcy'?: number;
    'pendingCcy'?: number;
    'totalCcy'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: WalletsGrandTotal): WalletsGrandTotal;
}
