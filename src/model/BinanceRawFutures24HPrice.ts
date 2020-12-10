
export interface BinanceRawFutures24HPrice {
    symbol: string;
    lastPrice: number;
    openPrice: number;
    highPrice: number;
    lowPrice: number;
    baseVolume: number;
    quoteVolume: number;
    priceChange: number;
    priceChangePercent: number;
    weightedAveragePrice: number;
    lastQuantity: number;
    openTime: Date;
    closeTime: Date;
    firstTradeId: number;
    lastTradeId: number;
    totalTrades: number;
}

