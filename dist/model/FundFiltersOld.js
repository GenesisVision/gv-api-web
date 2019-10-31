import { PlatformAsset } from './PlatformAsset';
import ApiClient from "../ApiClient";
export class FundFiltersOld {
    constructor(data) {
        this['assets'] = data['assets'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FundFiltersOld({
                'assets': ApiClient.convertToType(data['assets'], [PlatformAsset]),
            });
        }
    }
}
