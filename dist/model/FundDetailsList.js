import { AmountWithCurrency } from './AmountWithCurrency';
import { FundAssetPercent } from './FundAssetPercent';
import { PersonalFundDetailsList } from './PersonalFundDetailsList';
import { ProfitChart } from './ProfitChart';
import ApiClient from "../ApiClient";
export class FundDetailsList {
    constructor(data) {
        this['id'] = data['id'];
        this['logo'] = data['logo'];
        this['url'] = data['url'];
        this['color'] = data['color'];
        this['title'] = data['title'];
        this['description'] = data['description'];
        this['creationDate'] = data['creationDate'];
        this['investorsCount'] = data['investorsCount'];
        this['totalAssetsCount'] = data['totalAssetsCount'];
        this['topFundAssets'] = data['topFundAssets'];
        this['chart'] = data['chart'];
        this['personalDetails'] = data['personalDetails'];
        this['balance'] = data['balance'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FundDetailsList({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'creationDate': ApiClient.convertToType(data['creationDate'], 'Date'),
                'investorsCount': ApiClient.convertToType(data['investorsCount'], 'number'),
                'totalAssetsCount': ApiClient.convertToType(data['totalAssetsCount'], 'number'),
                'topFundAssets': ApiClient.convertToType(data['topFundAssets'], [FundAssetPercent]),
                'chart': ProfitChart.constructFromObject(data['chart']),
                'personalDetails': PersonalFundDetailsList.constructFromObject(data['personalDetails']),
                'balance': AmountWithCurrency.constructFromObject(data['balance']),
            });
        }
    }
}
