import { Color } from './Color';
import { Currency } from './Currency';

export interface AmountItem {
    amount: number;
    currency: Currency;
    color: Color;
    logo: string;
}

