import { FundAssetPartWithIcon } from './FundAssetPartWithIcon';
import ApiClient from "../ApiClient";
export class ReallocationModel {
    constructor(data) {
        this['date'] = data['date'];
        this['parts'] = data['parts'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ReallocationModel({
                'date': ApiClient.convertToType(data['date'], 'Date'),
                'parts': ApiClient.convertToType(data['parts'], [FundAssetPartWithIcon]),
            });
        }
    }
}
