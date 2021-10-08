import { BinanceRawFuturesAccountAsset } from './BinanceRawFuturesAccountAsset';
import { BinanceRawFuturesPositionInfo } from './BinanceRawFuturesPositionInfo';

export interface BinanceRawFuturesAccountInfo {
    canDeposit: boolean;
    canTrade: boolean;
    canWithdraw: boolean;
    feeTier: number;
    maxWithdrawAmount: number;
    totalInitialMargin: number;
    totalMaintMargin: number;
    totalMarginBalance: number;
    totalOpenOrderInitialMargin: number;
    totalPositionInitialMargin: number;
    totalUnrealizedProfit: number;
    totalWalletBalance: number;
    totalCrossWalletBalance: number;
    totalCrossUnPnl: number;
    availableBalance: number;
    updateTime: Date;
    assets: Array<BinanceRawFuturesAccountAsset>;
    positions: Array<BinanceRawFuturesPositionInfo>;
}

