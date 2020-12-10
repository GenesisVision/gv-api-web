import { BinanceSymbolFilterType } from './BinanceSymbolFilterType';

export interface BinanceRawFuturesSymbolPriceFilter {
    filterType: BinanceSymbolFilterType;
    minPrice: number;
    maxPrice: number;
    tickSize: number;
}

