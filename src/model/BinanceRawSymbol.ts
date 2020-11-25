import { BinanceAccountType } from './BinanceAccountType';
import { BinanceOrderType } from './BinanceOrderType';
import { BinanceRawSymbolIcebergPartsFilter } from './BinanceRawSymbolIcebergPartsFilter';
import { BinanceRawSymbolLotSizeFilter } from './BinanceRawSymbolLotSizeFilter';
import { BinanceRawSymbolMarketLotSizeFilter } from './BinanceRawSymbolMarketLotSizeFilter';
import { BinanceRawSymbolMaxAlgorithmicOrdersFilter } from './BinanceRawSymbolMaxAlgorithmicOrdersFilter';
import { BinanceRawSymbolMaxOrdersFilter } from './BinanceRawSymbolMaxOrdersFilter';
import { BinanceRawSymbolMaxPositionFilter } from './BinanceRawSymbolMaxPositionFilter';
import { BinanceRawSymbolMinNotionalFilter } from './BinanceRawSymbolMinNotionalFilter';
import { BinanceRawSymbolPercentPriceFilter } from './BinanceRawSymbolPercentPriceFilter';
import { BinanceRawSymbolPriceFilter } from './BinanceRawSymbolPriceFilter';
import { BinanceSymbolStatus } from './BinanceSymbolStatus';

export interface BinanceRawSymbol {
    name: string;
    status: BinanceSymbolStatus;
    baseAsset: string;
    baseAssetPrecision: number;
    quoteAsset: string;
    quoteAssetPrecision: number;
    orderTypes: Array<BinanceOrderType>;
    iceBergAllowed: boolean;
    isSpotTradingAllowed: boolean;
    isMarginTradingAllowed: boolean;
    ocoAllowed: boolean;
    quoteOrderQuantityMarketAllowed: boolean;
    baseCommissionPrecision: number;
    quoteCommissionPrecision: number;
    permissions: Array<BinanceAccountType>;
    iceBergPartsFilter: BinanceRawSymbolIcebergPartsFilter;
    lotSizeFilter: BinanceRawSymbolLotSizeFilter;
    marketLotSizeFilter: BinanceRawSymbolMarketLotSizeFilter;
    maxOrdersFilter: BinanceRawSymbolMaxOrdersFilter;
    maxAlgorithmicOrdersFilter: BinanceRawSymbolMaxAlgorithmicOrdersFilter;
    minNotionalFilter: BinanceRawSymbolMinNotionalFilter;
    priceFilter: BinanceRawSymbolPriceFilter;
    pricePercentFilter: BinanceRawSymbolPercentPriceFilter;
    maxPositionFilter: BinanceRawSymbolMaxPositionFilter;
}

