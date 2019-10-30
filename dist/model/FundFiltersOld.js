import { PlatformAsset } from './PlatformAsset';
import ApiClient from "../ApiClient";
export class FundFiltersOld {
    static constructFromObject(data, obj = new FundFiltersOld()) {
        if (data) {
            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], [PlatformAsset]);
            }
        }
        return obj;
    }
}
