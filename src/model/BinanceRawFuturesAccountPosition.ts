import { BinancePositionSide } from './BinancePositionSide';

export interface BinanceRawFuturesAccountPosition {
    isolated: boolean;
    leverage: number;
    initialMargin: number;
    maintMargin: number;
    openOrderInitialMargin: number;
    positionInitialMargin: number;
    symbol: string;
    unrealizedProfit: number;
    positionSide: BinancePositionSide;
    entryPrice: number;
    maxNotional: number;
    positionAmount: number;
}

