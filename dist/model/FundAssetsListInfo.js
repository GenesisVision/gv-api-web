import { FundAssetInfo } from './FundAssetInfo';
import ApiClient from "../ApiClient";
export class FundAssetsListInfo {
    constructor(data) {
        this['assets'] = data['assets'];
    }
    static constructFromObject(data) {
        return new FundAssetsListInfo({
            'assets': ApiClient.convertToType(data['assets'], [FundAssetInfo]),
        });
    }
}
