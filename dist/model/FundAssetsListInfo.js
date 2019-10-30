import { FundAssetInfo } from './FundAssetInfo';
import ApiClient from "../ApiClient";
export class FundAssetsListInfo {
    static constructFromObject(data, obj = new FundAssetsListInfo()) {
        if (data) {
            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], [FundAssetInfo]);
            }
        }
        return obj;
    }
}
