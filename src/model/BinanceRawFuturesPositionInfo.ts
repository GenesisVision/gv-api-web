import { BinancePositionSide } from './BinancePositionSide';

export interface BinanceRawFuturesPositionInfo {
    maxNotional: number;
    initialMargin: number;
    maintMargin: number;
    positionInitialMargin: number;
    openOrderInitialMargin: number;
    isolated: boolean;
    quantity: number;
    updateTime: Date;
    symbol: string;
    entryPrice: number;
    leverage: number;
    unrealizedPnl: number;
    positionSide: BinancePositionSide;
}

