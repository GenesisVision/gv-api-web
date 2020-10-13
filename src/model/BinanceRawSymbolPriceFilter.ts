import { BinanceRawSymbolFilterType } from './BinanceRawSymbolFilterType';

export interface BinanceRawSymbolPriceFilter {
    filterType: BinanceRawSymbolFilterType;
    minPrice: number;
    maxPrice: number;
    tickSize: number;
}

