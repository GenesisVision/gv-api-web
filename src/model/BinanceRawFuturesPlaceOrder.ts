import { BinanceOrderResponseType } from './BinanceOrderResponseType';
import { BinanceOrderSide } from './BinanceOrderSide';
import { BinanceOrderType } from './BinanceOrderType';
import { BinancePositionSide } from './BinancePositionSide';
import { BinanceTimeInForce } from './BinanceTimeInForce';
import { BinanceWorkingType } from './BinanceWorkingType';

export interface BinanceRawFuturesPlaceOrder {
    symbol: string;
    side: BinanceOrderSide;
    type: BinanceOrderType;
    quantity: number;
    positionSide: BinancePositionSide;
    timeInForce: BinanceTimeInForce;
    reduceOnly: boolean;
    price: number;
    newClientOrderId: string;
    stopPrice: number;
    activationPrice: number;
    callbackRate: number;
    workingType: BinanceWorkingType;
    closePosition: boolean;
    orderResponseType: BinanceOrderResponseType;
}

