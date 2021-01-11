import { BinanceFuturesMarginType } from './BinanceFuturesMarginType';
import { BinancePositionSide } from './BinancePositionSide';

export interface BinanceRawFuturesPosition {
    entryPrice: number;
    marginType: BinanceFuturesMarginType;
    isAutoAddMargin: boolean;
    isolatedMargin: number;
    leverage: number;
    liquidationPrice: number;
    markPrice: number;
    maxNotionalValue: string;
    quantity: number;
    symbol: string;
    unrealizedPnL: number;
    positionSide: BinancePositionSide;
}

