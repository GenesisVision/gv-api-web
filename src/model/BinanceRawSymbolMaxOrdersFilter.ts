import { BinanceSymbolFilterType } from './BinanceSymbolFilterType';

export interface BinanceRawSymbolMaxOrdersFilter {
    filterType: BinanceSymbolFilterType;
    maxNumberOrders: number;
}

