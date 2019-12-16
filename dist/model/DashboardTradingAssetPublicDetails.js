import { FundAssetDetails } from './FundAssetDetails';
import { ProgramAssetDetails } from './ProgramAssetDetails';
import ApiClient from "../ApiClient";
export class DashboardTradingAssetPublicDetails {
    constructor(data) {
        this['logo'] = data['logo'];
        this['color'] = data['color'];
        this['title'] = data['title'];
        this['url'] = data['url'];
        this['programDetails'] = data['programDetails'];
        this['fundDetails'] = data['fundDetails'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DashboardTradingAssetPublicDetails({
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
                'programDetails': ProgramAssetDetails.constructFromObject(data['programDetails']),
                'fundDetails': FundAssetDetails.constructFromObject(data['fundDetails']),
            });
        }
    }
}
