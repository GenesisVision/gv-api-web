import { BinanceFuturesMarginChangeDirectionType } from './BinanceFuturesMarginChangeDirectionType';

export interface BinanceRawFuturesPositionMarginResult {
    amount: number;
    code: number;
    maxNotionalValue: string;
    type: BinanceFuturesMarginChangeDirectionType;
}

