
export interface BinanceRawRecentTrade {
    orderId: number;
    price: number;
    baseQuantity: number;
    quoteQuantity: number;
    tradeTime: Date;
    buyerIsMaker: boolean;
    isBestMatch: boolean;
}

