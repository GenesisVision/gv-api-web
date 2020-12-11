import { BinanceOrderSide } from './BinanceOrderSide';
import { BinanceOrderStatus } from './BinanceOrderStatus';
import { BinanceOrderType } from './BinanceOrderType';
import { BinanceTimeInForce } from './BinanceTimeInForce';

export interface BinanceRawFuturesLiquidation {
    symbol: string;
    price: number;
    lastQuantityFilled: number;
    quantityFilled: number;
    averagePrice: number;
    status: BinanceOrderStatus;
    timeInForce: BinanceTimeInForce;
    side: BinanceOrderSide;
    type: BinanceOrderType;
    time: Date;
}

