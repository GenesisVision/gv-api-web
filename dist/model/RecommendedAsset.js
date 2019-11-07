import { AssetType } from './AssetType';
import { Currency } from './Currency';
import { ProfitChart } from './ProfitChart';
import { ProgramAssetDetails } from './ProgramAssetDetails';
import ApiClient from "../ApiClient";
export class RecommendedAsset {
    constructor(data) {
        this['currency'] = data['currency'];
        this['statistic'] = data['statistic'];
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
                'currency': Currency.constructFromObject(data['currency']),
                'statistic': ProfitChart.constructFromObject(data['statistic']),
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
