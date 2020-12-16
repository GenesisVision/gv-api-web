import { BinanceOrderSide } from './BinanceOrderSide';
import { BinanceOrderStatus } from './BinanceOrderStatus';
import { BinanceOrderType } from './BinanceOrderType';
import { BinancePositionSide } from './BinancePositionSide';
import { BinanceTimeInForce } from './BinanceTimeInForce';
import { BinanceWorkingType } from './BinanceWorkingType';

export interface BinanceRawFuturesPlacedOrder {
    symbol: string;
    orderId: number;
    clientOrderId: string;
    price: number;
    avgPrice: number;
    cumulativeQuantity: number;
    cumulativeQuoteQuantity: number;
    executedQuantity: number;
    originalQuantity: number;
    reduceOnly: boolean;
    side: BinanceOrderSide;
    positionSide: BinancePositionSide;
    status: BinanceOrderStatus;
    stopPrice: number;
    closePosition: boolean;
    timeInForce: BinanceTimeInForce;
    type: BinanceOrderType;
    originalType: BinanceOrderType;
    activatePrice: number;
    priceRate: number;
    updateTime: Date;
    workingType: BinanceWorkingType;
}

