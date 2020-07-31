import { Currency } from './Currency';

export interface WalletsGrandTotal {
    currency: Currency;
    available: number;
    invested: number;
    trading: number;
    readonly total: number;
}

