import { FundAssetPartWithIcon } from './FundAssetPartWithIcon';
import ApiClient from "../ApiClient";
export class ReallocationModel {
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
