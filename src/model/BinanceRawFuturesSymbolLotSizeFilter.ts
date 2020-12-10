import { BinanceSymbolFilterType } from './BinanceSymbolFilterType';

export interface BinanceRawFuturesSymbolLotSizeFilter {
    filterType: BinanceSymbolFilterType;
    minQuantity: number;
    maxQuantity: number;
    stepSize: number;
}

