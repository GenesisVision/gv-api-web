import { RateItem } from './RateItem';

export interface RatesModel {
    rates: { [key: string]: Array<RateItem>; };
}

