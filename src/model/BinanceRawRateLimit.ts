import { BinanceRawRateLimitInterval } from './BinanceRawRateLimitInterval';
import { BinanceRawRateLimitType } from './BinanceRawRateLimitType';

export interface BinanceRawRateLimit {
    interval: BinanceRawRateLimitInterval;
    type: BinanceRawRateLimitType;
    intervalNumber: number;
    limit: number;
}

