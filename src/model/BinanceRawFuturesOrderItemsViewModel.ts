import { BinanceRawFuturesOrder } from './BinanceRawFuturesOrder';

export interface BinanceRawFuturesOrderItemsViewModel {
    readonly items: Array<BinanceRawFuturesOrder>;
    readonly total: number;
}

