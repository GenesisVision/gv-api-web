import { BinanceRawOrderBookEntry } from './BinanceRawOrderBookEntry';

export interface BinanceRawOrderBook {
    symbol: string;
    lastUpdateId: number;
    firstUpdateId: number;
    bids: Array<BinanceRawOrderBookEntry>;
    asks: Array<BinanceRawOrderBookEntry>;
}

