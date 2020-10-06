
export interface BinanceRaw24HPrice {
    symbol: string;
    priceChange: number;
    priceChangePercent: number;
    weightedAveragePrice: number;
    lastPrice: number;
    lastQuantity: number;
    openPrice: number;
    highPrice: number;
    lowPrice: number;
    openTime: Date;
    closeTime: Date;
    firstTradeId: number;
    lastTradeId: number;
    totalTrades: number;
    prevDayClosePrice: number;
    bidPrice: number;
    bidQuantity: number;
    askPrice: number;
    askQuantity: number;
    baseVolume: number;
    quoteVolume: number;
}

