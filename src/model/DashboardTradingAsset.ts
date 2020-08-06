import { AssetType } from './AssetType';
import { AssetTypeExt } from './AssetTypeExt';
import { DashboardTradingAssetActions } from './DashboardTradingAssetActions';
import { DashboardTradingAssetBrokerDetails } from './DashboardTradingAssetBrokerDetails';
import { DashboardTradingAssetCommonDetails } from './DashboardTradingAssetCommonDetails';
import { DashboardTradingAssetCredentials } from './DashboardTradingAssetCredentials';
import { DashboardTradingAssetPublicDetails } from './DashboardTradingAssetPublicDetails';
import { DashboardTradingAssetSignalDetails } from './DashboardTradingAssetSignalDetails';
import { ProfitChart } from './ProfitChart';
import { Tag } from './Tag';

export interface DashboardTradingAsset {
    id: string;
    assetType: AssetType;
    assetTypeExt: AssetTypeExt;
    statistic: ProfitChart;
    publicInfo: DashboardTradingAssetPublicDetails;
    accountInfo: DashboardTradingAssetCommonDetails;
    credentials: DashboardTradingAssetCredentials;
    signalInfo: DashboardTradingAssetSignalDetails;
    broker: DashboardTradingAssetBrokerDetails;
    actions: DashboardTradingAssetActions;
    tags: Array<Tag>;
}

