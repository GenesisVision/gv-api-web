import { FundAssetPercent } from './fundAssetPercent';
import { PersonalFundDetailsList } from './personalFundDetailsList';
import { ProfitChart } from './profitChart';
import ApiClient from "../ApiClient";
export class FundDetailsList {
    constructor() {
    }
    static constructFromObject(data, obj = new FundDetailsList()) {
        if (data) {
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'string');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'string');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'string');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'string');
            }
            if (data.hasOwnProperty('creationDate')) {
                obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
            }
            if (data.hasOwnProperty('totalAssetsCount')) {
                obj['totalAssetsCount'] = ApiClient.convertToType(data['totalAssetsCount'], 'number');
            }
            if (data.hasOwnProperty('topFundAssets')) {
                obj['topFundAssets'] = ApiClient.convertToType(data['topFundAssets'], [FundAssetPercent]);
            }
            if (data.hasOwnProperty('chart')) {
                obj['chart'] = ProfitChart.constructFromObject(data['chart']);
            }
            if (data.hasOwnProperty('personalDetails')) {
                obj['personalDetails'] = PersonalFundDetailsList.constructFromObject(data['personalDetails']);
            }
        }
        return obj;
    }
}
