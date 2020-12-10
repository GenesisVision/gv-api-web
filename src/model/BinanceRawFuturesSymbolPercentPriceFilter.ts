import { BinanceSymbolFilterType } from './BinanceSymbolFilterType';

export interface BinanceRawFuturesSymbolPercentPriceFilter {
    filterType: BinanceSymbolFilterType;
    multiplierUp: number;
    multiplierDown: number;
    multiplierDecimal: number;
}

