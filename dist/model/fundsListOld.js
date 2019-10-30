import { FundDetailsOld } from './fundDetailsOld';
import ApiClient from "../ApiClient";
export class FundsListOld {
    constructor() {
    }
    static constructFromObject(data, obj = new FundsListOld()) {
        if (data) {
            if (data.hasOwnProperty('funds')) {
                obj['funds'] = ApiClient.convertToType(data['funds'], [FundDetailsOld]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}
