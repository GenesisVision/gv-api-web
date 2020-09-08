import { BinanceRawOrder } from './BinanceRawOrder';

export interface BinanceRawOrderItemsViewModel {
    readonly items: Array<BinanceRawOrder>;
    readonly total: number;
}

