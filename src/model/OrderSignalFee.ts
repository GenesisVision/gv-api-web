import { Currency } from './Currency';
import { FeeType } from './FeeType';

export interface OrderSignalFee {
    amount: number;
    currency: Currency;
    type: FeeType;
}

