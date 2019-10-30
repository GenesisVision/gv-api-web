import { PlatformAsset } from './platformAsset';
import ApiClient from "../ApiClient";
export class FundFiltersOld {
    constructor() {
    }
    static constructFromObject(data, obj = new FundFiltersOld()) {
        if (data) {
            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], [PlatformAsset]);
            }
        }
        return obj;
    }
}
