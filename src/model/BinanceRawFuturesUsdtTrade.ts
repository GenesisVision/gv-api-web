import { BinanceOrderSide } from './BinanceOrderSide';
import { BinancePositionSide } from './BinancePositionSide';

export interface BinanceRawFuturesUsdtTrade {
    quoteQuantity: number;
    symbol: string;
    buyer: boolean;
    commission: number;
    commissionAsset: string;
    id: number;
    maker: boolean;
    orderId: number;
    price: number;
    quantity: number;
    realizedPnl: number;
    side: BinanceOrderSide;
    positionSide: BinancePositionSide;
    tradeTime: Date;
}

