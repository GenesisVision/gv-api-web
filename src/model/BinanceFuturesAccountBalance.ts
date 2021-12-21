
export interface BinanceFuturesAccountBalance {
    accountAlias: string;
    asset: string;
    walletBalance: number;
    crossWalletBalance: number;
    crossUnrealizedPnl: number;
    availableBalance: number;
    maxWithdrawAmount: number;
    marginAvailable: boolean;
    logoUrl: string;
}

