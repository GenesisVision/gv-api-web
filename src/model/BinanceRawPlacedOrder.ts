import { BinanceOrderSide } from './BinanceOrderSide';
import { BinanceOrderStatus } from './BinanceOrderStatus';
import { BinanceOrderType } from './BinanceOrderType';
import { BinanceRawOrderTrade } from './BinanceRawOrderTrade';
import { BinanceTimeInForce } from './BinanceTimeInForce';

export interface BinanceRawPlacedOrder {
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    originalClientOrderId: string;
    createTime: Date;
    price: number;
    quantity: number;
    quantityFilled: number;
    quoteQuantityFilled: number;
    quoteQuantity: number;
    status: BinanceOrderStatus;
    timeInForce: BinanceTimeInForce;
    type: BinanceOrderType;
    side: BinanceOrderSide;
    fills: Array<BinanceRawOrderTrade>;
    stopPrice: number;
    marginBuyBorrowAmount: number;
    marginBuyBorrowAsset: string;
}

