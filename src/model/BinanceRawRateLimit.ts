import { BinanceRateLimitInterval } from './BinanceRateLimitInterval';
import { BinanceRateLimitType } from './BinanceRateLimitType';

export interface BinanceRawRateLimit {
    interval: BinanceRateLimitInterval;
    type: BinanceRateLimitType;
    intervalNumber: number;
    limit: number;
}

