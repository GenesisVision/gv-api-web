import { BinanceRawFuturesSymbol } from './BinanceRawFuturesSymbol';
import { BinanceRawRateLimit } from './BinanceRawRateLimit';

export interface BinanceRawFuturesExchangeInfo {
    timeZone: string;
    serverTime: Date;
    rateLimits: Array<BinanceRawRateLimit>;
    symbols: Array<BinanceRawFuturesSymbol>;
}

