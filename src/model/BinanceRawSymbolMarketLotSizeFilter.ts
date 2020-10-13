import { BinanceRawSymbolFilterType } from './BinanceRawSymbolFilterType';

export interface BinanceRawSymbolMarketLotSizeFilter {
    filterType: BinanceRawSymbolFilterType;
    minQuantity: number;
    maxQuantity: number;
    stepSize: number;
}

