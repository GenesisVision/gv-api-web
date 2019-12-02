import { AssetType } from './AssetType';
import { Currency } from './Currency';
import { DashboardTradingAssetBrokerDetails } from './DashboardTradingAssetBrokerDetails';
import { ProfitChart } from './ProfitChart';
import { ProgramAssetDetails } from './ProgramAssetDetails';
export declare class RecommendedAsset {
    'currency': Currency;
    'statistic': ProfitChart;
    'broker': DashboardTradingAssetBrokerDetails;
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
