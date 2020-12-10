import { BinanceSymbolFilterType } from './BinanceSymbolFilterType';

export interface BinanceRawFuturesSymbolMaxOrdersFilter {
    filterType: BinanceSymbolFilterType;
    maxNumberOrders: number;
}

