import { BinanceContractType } from './BinanceContractType';
import { BinanceOrderType } from './BinanceOrderType';
import { BinanceRawFuturesSymbolLotSizeFilter } from './BinanceRawFuturesSymbolLotSizeFilter';
import { BinanceRawFuturesSymbolMarketLotSizeFilter } from './BinanceRawFuturesSymbolMarketLotSizeFilter';
import { BinanceRawFuturesSymbolMaxAlgorithmicOrdersFilter } from './BinanceRawFuturesSymbolMaxAlgorithmicOrdersFilter';
import { BinanceRawFuturesSymbolMaxOrdersFilter } from './BinanceRawFuturesSymbolMaxOrdersFilter';
import { BinanceRawFuturesSymbolPercentPriceFilter } from './BinanceRawFuturesSymbolPercentPriceFilter';
import { BinanceRawFuturesSymbolPriceFilter } from './BinanceRawFuturesSymbolPriceFilter';
import { BinanceSymbolStatus } from './BinanceSymbolStatus';
import { BinanceTimeInForce } from './BinanceTimeInForce';
import { BinanceUnderlyingType } from './BinanceUnderlyingType';

export interface BinanceRawFuturesUsdtSymbol {
    name: string;
    pair: string;
    contractType: BinanceContractType;
    maintenanceMarginPercent: number;
    pricePrecision: number;
    quantityPrecision: number;
    requiredMarginPercent: number;
    settlePlan: number;
    maintMarginPercent: number;
    triggerProtect: number;
    baseAsset: string;
    marginAsset: string;
    quoteAsset: string;
    baseAssetPrecision: number;
    quoteAssetPrecision: number;
    status: BinanceSymbolStatus;
    underlyingType: BinanceUnderlyingType;
    deliveryDate: Date;
    listingDate: Date;
    orderTypes: Array<BinanceOrderType>;
    timeInForce: Array<BinanceTimeInForce>;
    priceFilter: BinanceRawFuturesSymbolPriceFilter;
    lotSizeFilter: BinanceRawFuturesSymbolLotSizeFilter;
    marketLotSizeFilter: BinanceRawFuturesSymbolMarketLotSizeFilter;
    maxOrdersFilter: BinanceRawFuturesSymbolMaxOrdersFilter;
    maxAlgoOrdersFilter: BinanceRawFuturesSymbolMaxAlgorithmicOrdersFilter;
    pricePercentFilter: BinanceRawFuturesSymbolPercentPriceFilter;
}

