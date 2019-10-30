import { FundAssetInfo } from './fundAssetInfo';
import ApiClient from "../ApiClient";
export class FundAssetsListInfo {
    constructor() {
    }
    static constructFromObject(data, obj = new FundAssetsListInfo()) {
        if (data) {
            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], [FundAssetInfo]);
            }
        }
        return obj;
    }
}
