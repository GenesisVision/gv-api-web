import { BinanceFuturesMarginType } from './BinanceFuturesMarginType';
import { BinancePositionSide } from './BinancePositionSide';

export interface BinanceRawFuturesPosition {
    entryPrice: number;
    marginType: BinanceFuturesMarginType;
    isAutoAddMargin: boolean;
    positionAmount: number;
    isolatedMargin: number;
    leverage: number;
    liquidationPrice: number;
    markPrice: number;
    maxNotionalValue: number;
    symbol: string;
    unrealizedProfit: number;
    positionSide: BinancePositionSide;
}

