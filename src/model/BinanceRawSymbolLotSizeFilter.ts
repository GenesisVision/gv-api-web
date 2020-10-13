import { BinanceRawSymbolFilterType } from './BinanceRawSymbolFilterType';

export interface BinanceRawSymbolLotSizeFilter {
    filterType: BinanceRawSymbolFilterType;
    minQuantity: number;
    maxQuantity: number;
    stepSize: number;
}

