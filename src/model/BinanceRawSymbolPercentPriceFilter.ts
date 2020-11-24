import { BinanceSymbolFilterType } from './BinanceSymbolFilterType';

export interface BinanceRawSymbolPercentPriceFilter {
    filterType: BinanceSymbolFilterType;
    multiplierUp: number;
    multiplierDown: number;
    averagePriceMinutes: number;
}

