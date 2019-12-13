import { AssetType } from './AssetType';
import { DashboardTradingAssetBrokerDetails } from './DashboardTradingAssetBrokerDetails';
import { ProfitChart } from './ProfitChart';
import { ProgramAssetDetails } from './ProgramAssetDetails';
export declare class RecommendedAsset {
    'currency': CurrencyEnum;
    'statistic': ProfitChart;
    'leverage': number;
    'broker': DashboardTradingAssetBrokerDetails;
    'isExternal': boolean;
    'hasSignalAccount': boolean;
    'id': string;
    'logo': string;
    'color': string;
    'title': string;
    'url': string;
    'assetType': AssetType;
    'programDetails': ProgramAssetDetails;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): RecommendedAsset | undefined;
}
declare type CurrencyEnum = 'USD' | 'BTC' | 'ETH' | 'USDT' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
export {};
