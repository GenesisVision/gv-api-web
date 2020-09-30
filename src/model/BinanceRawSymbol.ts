import { BinanceRawAccountType } from './BinanceRawAccountType';
import { BinanceRawOrderType } from './BinanceRawOrderType';
import { BinanceRawSymbolFilter } from './BinanceRawSymbolFilter';
import { BinanceRawSymbolStatus } from './BinanceRawSymbolStatus';

export interface BinanceRawSymbol {
    name: string;
    status: BinanceRawSymbolStatus;
    baseAsset: string;
    baseAssetPrecision: number;
    quoteAsset: string;
    quoteAssetPrecision: number;
    orderTypes: Array<BinanceRawOrderType>;
    iceBergAllowed: boolean;
    isSpotTradingAllowed: boolean;
    isMarginTradingAllowed: boolean;
    ocoAllowed: boolean;
    quoteOrderQuantityMarketAllowed: boolean;
    baseCommissionPrecision: number;
    quoteCommissionPrecision: number;
    permissions: Array<BinanceRawAccountType>;
    filters: Array<BinanceRawSymbolFilter>;
}

