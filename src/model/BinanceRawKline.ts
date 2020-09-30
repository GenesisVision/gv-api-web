
export interface BinanceRawKline {
    openTime: Date;
    open: number;
    high: number;
    low: number;
    close: number;
    baseVolume: number;
    closeTime: Date;
    quoteVolume: number;
    tradeCount: number;
    takerBuyBaseVolume: number;
    takerBuyQuoteVolume: number;
}

