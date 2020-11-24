import { BinanceOrderResponseType } from './BinanceOrderResponseType';
import { BinanceOrderSide } from './BinanceOrderSide';
import { BinanceOrderType } from './BinanceOrderType';
import { BinanceTimeInForce } from './BinanceTimeInForce';

export interface BinanceRawPlaceOrder {
    symbol: string;
    side: BinanceOrderSide;
    type: BinanceOrderType;
    quantity: number;
    quoteOrderQuantity: number;
    newClientOrderId: string;
    price: number;
    timeInForce: BinanceTimeInForce;
    stopPrice: number;
    icebergQuantity: number;
    orderResponseType: BinanceOrderResponseType;
}

