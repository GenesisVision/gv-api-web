import { Currency } from './Currency';
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
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: WalletsGrandTotal): WalletsGrandTotal;
}
