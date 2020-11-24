import { BinanceSymbolFilterType } from './BinanceSymbolFilterType';

export interface BinanceRawSymbolLotSizeFilter {
    filterType: BinanceSymbolFilterType;
    minQuantity: number;
    maxQuantity: number;
    stepSize: number;
}

