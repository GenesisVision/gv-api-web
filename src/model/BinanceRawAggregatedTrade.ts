
export interface BinanceRawAggregatedTrade {
    aggregateTradeId: number;
    price: number;
    quantity: number;
    firstTradeId: number;
    lastTradeId: number;
    tradeTime: Date;
    buyerIsMaker: boolean;
    wasBestPriceMatch: boolean;
}

