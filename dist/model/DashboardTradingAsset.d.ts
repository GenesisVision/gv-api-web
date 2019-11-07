import { AssetType } from './AssetType';
import { DashboardTradingAssetActions } from './DashboardTradingAssetActions';
import { DashboardTradingAssetBrokerDetails } from './DashboardTradingAssetBrokerDetails';
import { DashboardTradingAssetCommonDetails } from './DashboardTradingAssetCommonDetails';
import { DashboardTradingAssetPublicDetails } from './DashboardTradingAssetPublicDetails';
import { ProfitChart } from './ProfitChart';
export declare class DashboardTradingAsset {
    'id': string;
    'assetType': AssetType;
    'statistic': ProfitChart;
    'publicInfo': DashboardTradingAssetPublicDetails;
    'accountInfo': DashboardTradingAssetCommonDetails;
    'broker': DashboardTradingAssetBrokerDetails;
    'actions': DashboardTradingAssetActions;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): DashboardTradingAsset | undefined;
}
