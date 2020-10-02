import { BinanceRawKline } from './BinanceRawKline';

export interface BinanceRawKlineItemsViewModel {
    readonly items: Array<BinanceRawKline>;
    readonly total: number;
}

