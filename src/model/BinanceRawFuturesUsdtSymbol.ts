import { BinanceOrderType } from './BinanceOrderType';
import { BinanceRawFuturesSymbolLotSizeFilter } from './BinanceRawFuturesSymbolLotSizeFilter';
import { BinanceRawFuturesSymbolMarketLotSizeFilter } from './BinanceRawFuturesSymbolMarketLotSizeFilter';
import { BinanceRawFuturesSymbolMaxAlgorithmicOrdersFilter } from './BinanceRawFuturesSymbolMaxAlgorithmicOrdersFilter';
import { BinanceRawFuturesSymbolMaxOrdersFilter } from './BinanceRawFuturesSymbolMaxOrdersFilter';
import { BinanceRawFuturesSymbolPercentPriceFilter } from './BinanceRawFuturesSymbolPercentPriceFilter';
import { BinanceRawFuturesSymbolPriceFilter } from './BinanceRawFuturesSymbolPriceFilter';
import { BinanceSymbolStatus } from './BinanceSymbolStatus';
import { BinanceTimeInForce } from './BinanceTimeInForce';

export interface BinanceRawFuturesUsdtSymbol {
    name: string;
    maintenanceMarginPercent: number;
    pricePrecision: number;
    quantityPrecision: number;
    requiredMarginPercent: number;
    baseAsset: string;
    marginAsset: string;
    quoteAsset: string;
    baseAssetPrecision: number;
    quoteAssetPrecision: number;
    status: BinanceSymbolStatus;
    orderTypes: Array<BinanceOrderType>;
    timeInForce: Array<BinanceTimeInForce>;
    priceFilter: BinanceRawFuturesSymbolPriceFilter;
    lotSizeFilter: BinanceRawFuturesSymbolLotSizeFilter;
    marketLotSizeFilter: BinanceRawFuturesSymbolMarketLotSizeFilter;
    maxOrdersFilter: BinanceRawFuturesSymbolMaxOrdersFilter;
    maxAlgoOrdersFilter: BinanceRawFuturesSymbolMaxAlgorithmicOrdersFilter;
    pricePercentFilter: BinanceRawFuturesSymbolPercentPriceFilter;
}

