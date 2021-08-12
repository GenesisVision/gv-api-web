
export interface BinanceRawFuturesAccountAsset {
    asset: string;
    initialMargin: number;
    maintMargin: number;
    marginBalance: number;
    maxWithdrawAmount: number;
    openOrderInitialMargin: number;
    positionInitialMargin: number;
    walletBalance: number;
    crossWalletBalance: number;
    availableBalance: number;
    unrealizedPnL: number;
    crossUnrealizedPnL: number;
}

