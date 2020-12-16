
export interface BinanceRawFuturesAccountAsset {
    asset: string;
    initialMargin: number;
    maintMargin: number;
    marginBalance: number;
    maxWithdrawAmount: number;
    openOrderInitialMargin: number;
    positionInitialMargin: number;
    unrealizedProfit: number;
    walletBalance: number;
    crossWalletBalance: number;
    crossUnPnl: number;
    availableBalance: number;
}

