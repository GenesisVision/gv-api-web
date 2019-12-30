import { AssetType } from './AssetType';
import { AssetTypeExt } from './AssetTypeExt';
import { DashboardTradingAssetActions } from './DashboardTradingAssetActions';
import { DashboardTradingAssetBrokerDetails } from './DashboardTradingAssetBrokerDetails';
import { DashboardTradingAssetCommonDetails } from './DashboardTradingAssetCommonDetails';
import { DashboardTradingAssetPublicDetails } from './DashboardTradingAssetPublicDetails';
import { DashboardTradingAssetSignalDetails } from './DashboardTradingAssetSignalDetails';
import { ProfitChart } from './ProfitChart';
export declare class DashboardTradingAsset {
    'id': string;
    'assetType': AssetType;
    'assetTypeExt': AssetTypeExt;
    'statistic': ProfitChart;
    'publicInfo': DashboardTradingAssetPublicDetails;
    'accountInfo': DashboardTradingAssetCommonDetails;
    'signalInfo': DashboardTradingAssetSignalDetails;
    'broker': DashboardTradingAssetBrokerDetails;
    'actions': DashboardTradingAssetActions;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): DashboardTradingAsset | undefined;
}
