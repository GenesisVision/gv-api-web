import { FundAssetPartWithIcon } from './FundAssetPartWithIcon';
import ApiClient from "../ApiClient";
export class FundAssetsState {
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
