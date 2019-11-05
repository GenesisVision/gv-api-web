import { DashboardAssetType } from './DashboardAssetType';
import { DashboardTradingAssetActions } from './DashboardTradingAssetActions';
import { DashboardTradingAssetBrokerDetails } from './DashboardTradingAssetBrokerDetails';
import { DashboardTradingAssetPublicDetails } from './DashboardTradingAssetPublicDetails';
import { ProfitChart } from './ProfitChart';
export declare class DashboardTradingAsset {
    'id': string;
    'assetType': DashboardAssetType;
    'chart': ProfitChart;
    'publicInfo': DashboardTradingAssetPublicDetails;
    'broker': DashboardTradingAssetBrokerDetails;
    'actions': DashboardTradingAssetActions;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): DashboardTradingAsset | undefined;
}
