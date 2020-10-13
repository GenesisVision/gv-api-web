import { BinanceRawSymbolFilterType } from './BinanceRawSymbolFilterType';

export interface BinanceRawSymbolMaxOrdersFilter {
    filterType: BinanceRawSymbolFilterType;
    maxNumberOrders: number;
}

