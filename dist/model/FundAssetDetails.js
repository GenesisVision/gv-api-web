import { FundAssetPercent } from './FundAssetPercent';
import ApiClient from "../ApiClient";
export class FundAssetDetails {
    constructor(data) {
        this['topFundAssets'] = data['topFundAssets'];
        this['totalAssetsCount'] = data['totalAssetsCount'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FundAssetDetails({
                'topFundAssets': ApiClient.convertToType(data['topFundAssets'], [FundAssetPercent]),
                'totalAssetsCount': ApiClient.convertToType(data['totalAssetsCount'], 'number'),
            });
        }
    }
}
