import { BinanceRawRateLimit } from './BinanceRawRateLimit';
import { BinanceRawSymbol } from './BinanceRawSymbol';

export interface BinanceRawExchangeInfo {
    timeZone: string;
    serverTime: Date;
    rateLimits: Array<BinanceRawRateLimit>;
    symbols: Array<BinanceRawSymbol>;
}

