import { Currency } from './Currency';

export interface LimitWithoutKyc {
    limit: number;
    currency: Currency;
    invested: number;
}

