import { BinanceSymbolFilterType } from './BinanceSymbolFilterType';

export interface BinanceRawSymbolPriceFilter {
    filterType: BinanceSymbolFilterType;
    minPrice: number;
    maxPrice: number;
    tickSize: number;
}

