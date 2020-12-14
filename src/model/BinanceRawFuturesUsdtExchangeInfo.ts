import { BinanceRawFuturesUsdtSymbol } from './BinanceRawFuturesUsdtSymbol';
import { BinanceRawRateLimit } from './BinanceRawRateLimit';

export interface BinanceRawFuturesUsdtExchangeInfo {
    timeZone: string;
    serverTime: Date;
    rateLimits: Array<BinanceRawRateLimit>;
    symbols: Array<BinanceRawFuturesUsdtSymbol>;
}

