import { DashboardAssetType } from './DashboardAssetType';
import { DashboardTradingAssetActions } from './DashboardTradingAssetActions';
import { DashboardTradingAssetBrokerDetails } from './DashboardTradingAssetBrokerDetails';
import { DashboardTradingAssetPublicDetails } from './DashboardTradingAssetPublicDetails';
import { ProfitChart } from './ProfitChart';
import ApiClient from "../ApiClient";
export class DashboardTradingAsset {
    constructor(data) {
        this['id'] = data['id'];
        this['assetType'] = data['assetType'];
        this['statistic'] = data['statistic'];
        this['publicInfo'] = data['publicInfo'];
        this['broker'] = data['broker'];
        this['actions'] = data['actions'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DashboardTradingAsset({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'assetType': DashboardAssetType.constructFromObject(data['assetType']),
                'statistic': ProfitChart.constructFromObject(data['statistic']),
                'publicInfo': DashboardTradingAssetPublicDetails.constructFromObject(data['publicInfo']),
                'broker': DashboardTradingAssetBrokerDetails.constructFromObject(data['broker']),
                'actions': DashboardTradingAssetActions.constructFromObject(data['actions']),
            });
        }
    }
}
