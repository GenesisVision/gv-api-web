import { BinanceRawAccountType } from './BinanceRawAccountType';
import { BinanceRawOrderType } from './BinanceRawOrderType';
import { BinanceRawSymbolIcebergPartsFilter } from './BinanceRawSymbolIcebergPartsFilter';
import { BinanceRawSymbolLotSizeFilter } from './BinanceRawSymbolLotSizeFilter';
import { BinanceRawSymbolMarketLotSizeFilter } from './BinanceRawSymbolMarketLotSizeFilter';
import { BinanceRawSymbolMaxAlgorithmicOrdersFilter } from './BinanceRawSymbolMaxAlgorithmicOrdersFilter';
import { BinanceRawSymbolMaxOrdersFilter } from './BinanceRawSymbolMaxOrdersFilter';
import { BinanceRawSymbolMinNotionalFilter } from './BinanceRawSymbolMinNotionalFilter';
import { BinanceRawSymbolPercentPriceFilter } from './BinanceRawSymbolPercentPriceFilter';
import { BinanceRawSymbolPriceFilter } from './BinanceRawSymbolPriceFilter';
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
    iceBergPartsFilter: BinanceRawSymbolIcebergPartsFilter;
    lotSizeFilter: BinanceRawSymbolLotSizeFilter;
    marketLotSizeFilter: BinanceRawSymbolMarketLotSizeFilter;
    maxOrdersFilter: BinanceRawSymbolMaxOrdersFilter;
    maxAlgorithmicOrdersFilter: BinanceRawSymbolMaxAlgorithmicOrdersFilter;
    minNotionalFilter: BinanceRawSymbolMinNotionalFilter;
    priceFilter: BinanceRawSymbolPriceFilter;
    pricePercentFilter: BinanceRawSymbolPercentPriceFilter;
}

