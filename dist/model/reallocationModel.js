import { FundAssetPartWithIcon } from './fundAssetPartWithIcon';
import ApiClient from "../ApiClient";
export class ReallocationModel {
    constructor() {
    }
    static constructFromObject(data, obj = new ReallocationModel()) {
        if (data) {
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('parts')) {
                obj['parts'] = ApiClient.convertToType(data['parts'], [FundAssetPartWithIcon]);
            }
        }
        return obj;
    }
}
