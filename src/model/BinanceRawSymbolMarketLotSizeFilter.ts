import { BinanceSymbolFilterType } from './BinanceSymbolFilterType';

export interface BinanceRawSymbolMarketLotSizeFilter {
    filterType: BinanceSymbolFilterType;
    minQuantity: number;
    maxQuantity: number;
    stepSize: number;
}

