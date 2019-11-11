import { FundAssetPartWithIcon } from './FundAssetPartWithIcon';
import ApiClient from "../ApiClient";
export class FundAssetsState {
    constructor(data) {
        this['date'] = data['date'];
        this['assets'] = data['assets'];
        this['otherPercent'] = data['otherPercent'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FundAssetsState({
                'date': ApiClient.convertToType(data['date'], 'number'),
                'assets': ApiClient.convertToType(data['assets'], [FundAssetPartWithIcon]),
                'otherPercent': ApiClient.convertToType(data['otherPercent'], 'number'),
            });
        }
    }
}
