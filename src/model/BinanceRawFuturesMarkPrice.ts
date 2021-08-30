
export interface BinanceRawFuturesMarkPrice {
    symbol: string;
    markPrice: number;
    fundingRate: number;
    nextFundingTime: Date;
    time: Date;
    indexPrice: number;
}

