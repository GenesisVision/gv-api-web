import { BinanceOrderSide } from './BinanceOrderSide';
import { BinanceOrderStatus } from './BinanceOrderStatus';
import { BinanceOrderType } from './BinanceOrderType';
import { BinanceTimeInForce } from './BinanceTimeInForce';

export interface BinanceRawCancelOrder {
    symbol: string;
    orderId: number;
    clientOrderId: string;
    originalClientOrderId: string;
    orderListId: number;
    quoteQuantity: number;
    price: number;
    quantity: number;
    quantityFilled: number;
    quoteQuantityFilled: number;
    status: BinanceOrderStatus;
    timeInForce: BinanceTimeInForce;
    type: BinanceOrderType;
    side: BinanceOrderSide;
}

