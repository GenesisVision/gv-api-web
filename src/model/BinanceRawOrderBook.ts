import { BinanceRawOrderBookEntry } from './BinanceRawOrderBookEntry';

export interface BinanceRawOrderBook {
    symbol: string;
    lastUpdateId: number;
    bids: Array<BinanceRawOrderBookEntry>;
    asks: Array<BinanceRawOrderBookEntry>;
}

