import { BinanceRawSymbolFilterType } from './BinanceRawSymbolFilterType';

export interface BinanceRawSymbolPercentPriceFilter {
    filterType: BinanceRawSymbolFilterType;
    multiplierUp: number;
    multiplierDown: number;
    averagePriceMinutes: number;
}

