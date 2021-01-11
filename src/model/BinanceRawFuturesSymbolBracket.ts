import { BinanceRawFuturesBracket } from './BinanceRawFuturesBracket';

export interface BinanceRawFuturesSymbolBracket {
    symbolOrPair: string;
    brackets: Array<BinanceRawFuturesBracket>;
}

