import { BinanceExecutionType } from './BinanceExecutionType';
import { BinanceOrderRejectReason } from './BinanceOrderRejectReason';
import { BinanceOrderSide } from './BinanceOrderSide';
import { BinanceOrderStatus } from './BinanceOrderStatus';
import { BinanceOrderType } from './BinanceOrderType';
import { BinanceTimeInForce } from './BinanceTimeInForce';

export interface BinanceRawOrder {
    accountId: string;
    symbol: string;
    clientOrderId: string;
    side: BinanceOrderSide;
    type: BinanceOrderType;
    timeInForce: BinanceTimeInForce;
    quantity: number;
    price: number;
    stopPrice: number;
    icebergQuantity: number;
    originalClientOrderId: string;
    executionType: BinanceExecutionType;
    status: BinanceOrderStatus;
    rejectReason: BinanceOrderRejectReason;
    orderId: number;
    lastQuantityFilled: number;
    quantityFilled: number;
    lastPriceFilled: number;
    commission: number;
    commissionAsset: string;
    updateTime: Date;
    tradeId: number;
    isWorking: boolean;
    buyerIsMaker: boolean;
    createTime: Date;
    quoteQuantityFilled: number;
    quoteQuantity: number;
    lastQuoteQuantity: number;
    orderListId: number;
}

