import { BinanceSymbolFilterType } from './BinanceSymbolFilterType';

export interface BinanceRawSymbolMinNotionalFilter {
    filterType: BinanceSymbolFilterType;
    minNotional: number;
    applyToMarketOrders: boolean;
    averagePriceMinutes: number;
}

