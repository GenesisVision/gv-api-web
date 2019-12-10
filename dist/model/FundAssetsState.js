import { FundAssetPartWithIcon } from './FundAssetPartWithIcon';
import ApiClient from "../ApiClient";
export class FundAssetsState {
    constructor(data) {
        this['date'] = data['date'];
        this['value'] = data['value'];
        this['assets'] = data['assets'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FundAssetsState({
                'date': ApiClient.convertToType(data['date'], 'number'),
                'value': ApiClient.convertToType(data['value'], 'number'),
                'assets': ApiClient.convertToType(data['assets'], [FundAssetPartWithIcon]),
            });
        }
    }
}
