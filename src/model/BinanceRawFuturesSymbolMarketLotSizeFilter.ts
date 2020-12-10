import { BinanceSymbolFilterType } from './BinanceSymbolFilterType';

export interface BinanceRawFuturesSymbolMarketLotSizeFilter {
    filterType: BinanceSymbolFilterType;
    minQuantity: number;
    maxQuantity: number;
    stepSize: number;
}

