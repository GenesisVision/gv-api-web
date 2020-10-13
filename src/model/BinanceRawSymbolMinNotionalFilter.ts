import { BinanceRawSymbolFilterType } from './BinanceRawSymbolFilterType';

export interface BinanceRawSymbolMinNotionalFilter {
    filterType: BinanceRawSymbolFilterType;
    minNotional: number;
    applyToMarketOrders: boolean;
    averagePriceMinutes: number;
}

