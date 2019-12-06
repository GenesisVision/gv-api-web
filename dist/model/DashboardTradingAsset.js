import { AssetType } from './AssetType';
import { AssetTypeExt } from './AssetTypeExt';
import { DashboardTradingAssetActions } from './DashboardTradingAssetActions';
import { DashboardTradingAssetBrokerDetails } from './DashboardTradingAssetBrokerDetails';
import { DashboardTradingAssetCommonDetails } from './DashboardTradingAssetCommonDetails';
import { DashboardTradingAssetPublicDetails } from './DashboardTradingAssetPublicDetails';
import { DashboardTradingAssetSignalDetails } from './DashboardTradingAssetSignalDetails';
import { ProfitChart } from './ProfitChart';
import ApiClient from "../ApiClient";
export class DashboardTradingAsset {
    constructor(data) {
        this['id'] = data['id'];
        this['assetType'] = data['assetType'];
        this['assetTypeExt'] = data['assetTypeExt'];
        this['statistic'] = data['statistic'];
        this['publicInfo'] = data['publicInfo'];
        this['accountInfo'] = data['accountInfo'];
        this['signalInfo'] = data['signalInfo'];
        this['broker'] = data['broker'];
        this['actions'] = data['actions'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DashboardTradingAsset({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'assetType': AssetType.constructFromObject(data['assetType']),
                'assetTypeExt': AssetTypeExt.constructFromObject(data['assetTypeExt']),
                'statistic': ProfitChart.constructFromObject(data['statistic']),
                'publicInfo': DashboardTradingAssetPublicDetails.constructFromObject(data['publicInfo']),
                'accountInfo': DashboardTradingAssetCommonDetails.constructFromObject(data['accountInfo']),
                'signalInfo': DashboardTradingAssetSignalDetails.constructFromObject(data['signalInfo']),
                'broker': DashboardTradingAssetBrokerDetails.constructFromObject(data['broker']),
                'actions': DashboardTradingAssetActions.constructFromObject(data['actions']),
            });
        }
    }
}
