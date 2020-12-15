import { BinanceOrderSide } from './BinanceOrderSide';
import { BinanceOrderStatus } from './BinanceOrderStatus';
import { BinanceOrderType } from './BinanceOrderType';
import { BinancePositionSide } from './BinancePositionSide';
import { BinanceTimeInForce } from './BinanceTimeInForce';
import { BinanceWorkingType } from './BinanceWorkingType';

export interface BinanceRawFuturesOrder {
    accountId: string;
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
    closePosition: boolean;
    side: BinanceOrderSide;
    status: BinanceOrderStatus;
    stopPrice: number;
    timeInForce: BinanceTimeInForce;
    originalType: BinanceOrderType;
    type: BinanceOrderType;
    activatePrice: number;
    priceRate: number;
    updateTime: Date;
    createdTime: Date;
    workingType: BinanceWorkingType;
    positionSide: BinancePositionSide;
}

