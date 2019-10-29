import { FundAssetPartWithIcon } from './fundAssetPartWithIcon';
import ApiClient from "../ApiClient";
export class FundAssetsState {
    constructor() {
    }
    static constructFromObject(data, obj = new FundAssetsState()) {
        if (data) {
            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], [FundAssetPartWithIcon]);
            }
            if (data.hasOwnProperty('otherPercent')) {
                obj['otherPercent'] = ApiClient.convertToType(data['otherPercent'], 'number');
            }
        }
        return obj;
    }
}
