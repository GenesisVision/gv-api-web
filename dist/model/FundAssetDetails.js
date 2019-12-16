import { FundAssetPercent } from './FundAssetPercent';
import ApiClient from "../ApiClient";
export class FundAssetDetails {
    constructor(data) {
        this['topFundAssets'] = data['topFundAssets'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FundAssetDetails({
                'topFundAssets': ApiClient.convertToType(data['topFundAssets'], [FundAssetPercent]),
            });
        }
    }
}
