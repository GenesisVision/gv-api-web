import { Currency } from './Currency';
import { FeeType } from './FeeType';

export interface FeeDetails {
    title: string;
    description: string;
    type: FeeType;
    amount: number;
    currency: Currency;
}

