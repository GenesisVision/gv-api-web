
export interface BinanceRawBookPrice {
    symbol: string;
    bestBidPrice: number;
    bestBidQuantity: number;
    bestAskPrice: number;
    bestAskQuantity: number;
    timestamp: Date;
}

