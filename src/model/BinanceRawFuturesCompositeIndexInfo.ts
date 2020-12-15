import { BinanceRawFuturesCompositeIndexInfoAsset } from './BinanceRawFuturesCompositeIndexInfoAsset';

export interface BinanceRawFuturesCompositeIndexInfo {
    symbol: string;
    timestamp: Date;
    baseAssets: Array<BinanceRawFuturesCompositeIndexInfoAsset>;
}

