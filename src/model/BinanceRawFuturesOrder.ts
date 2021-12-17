import { BinanceExecutionType } from './BinanceExecutionType';
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
    tradeId: number;
    clientOrderId: string;
    price: number;
    avgPrice: number;
    reduceOnly: boolean;
    closePosition: boolean;
    side: BinanceOrderSide;
    status: BinanceOrderStatus;
    stopPrice: number;
    timeInForce: BinanceTimeInForce;
    originalType: BinanceOrderType;
    type: BinanceOrderType;
    activatePrice: number;
    updateTime: Date;
    createdTime: Date;
    workingType: BinanceWorkingType;
    positionSide: BinancePositionSide;
    quantity: number;
    quantityFilled: number;
    quoteQuantityFilled: number;
    callbackRate: number;
    lastFilledQuantity: number;
    commission: number;
    commissionAsset: string;
    realizedProfit: number;
    executionType: BinanceExecutionType;
    priceLastFilledTrade: number;
}

