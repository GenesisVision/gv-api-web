import { AssetType } from './AssetType';
import { DashboardTradingAssetBrokerDetails } from './DashboardTradingAssetBrokerDetails';
import { ProfitChart } from './ProfitChart';
import { ProgramAssetDetails } from './ProgramAssetDetails';
import ApiClient from "../ApiClient";
export class RecommendedAsset {
    constructor(data) {
        this['currency'] = data['currency'];
        this['statistic'] = data['statistic'];
        this['leverage'] = data['leverage'];
        this['broker'] = data['broker'];
        this['isExternal'] = data['isExternal'];
        this['hasSignalAccount'] = data['hasSignalAccount'];
        this['id'] = data['id'];
        this['logo'] = data['logo'];
        this['color'] = data['color'];
        this['title'] = data['title'];
        this['url'] = data['url'];
        this['assetType'] = data['assetType'];
        this['programDetails'] = data['programDetails'];
    }
    static constructFromObject(data) {
        if (data) {
            return new RecommendedAsset({
                'currency': ApiClient.convertToType(data['currency'], 'string'),
                'statistic': ProfitChart.constructFromObject(data['statistic']),
                'leverage': ApiClient.convertToType(data['leverage'], 'number'),
                'broker': DashboardTradingAssetBrokerDetails.constructFromObject(data['broker']),
                'isExternal': ApiClient.convertToType(data['isExternal'], 'boolean'),
                'hasSignalAccount': ApiClient.convertToType(data['hasSignalAccount'], 'boolean'),
                'id': ApiClient.convertToType(data['id'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
                'assetType': AssetType.constructFromObject(data['assetType']),
                'programDetails': ProgramAssetDetails.constructFromObject(data['programDetails']),
            });
        }
    }
}
