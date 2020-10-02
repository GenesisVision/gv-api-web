import { BinanceRawOrderResponseType } from './BinanceRawOrderResponseType';
import { BinanceRawOrderSide } from './BinanceRawOrderSide';
import { BinanceRawOrderType } from './BinanceRawOrderType';
import { BinanceRawTimeInForce } from './BinanceRawTimeInForce';

export interface BinanceRawPlaceOrder {
    symbol: string;
    side: BinanceRawOrderSide;
    type: BinanceRawOrderType;
    quantity: number;
    quoteOrderQuantity: number;
    newClientOrderId: string;
    price: number;
    timeInForce: BinanceRawTimeInForce;
    stopPrice: number;
    icebergQuantity: number;
    orderResponseType: BinanceRawOrderResponseType;
}

